import { Response, NextFunction, Request } from 'express';
import { format } from 'date-fns';

import { Transaction, type Group, type IGroupedTransactions, type ITransaction } from '../../models';

interface IRequest extends Request {
  body: { group?: Group };
}

export const getAllTransactions = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const allTransaction = await Transaction.find<ITransaction>();
    allTransaction.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (!req.body.group) return res.status(200).json(allTransaction);

    const groupedTransactions = new Map<string, IGroupedTransactions>();
    allTransaction.forEach((transaction) => {
      if (!req.body.group) return;
      const date = getTransactionGroupBy(req.body.group, transaction.date.toISOString());

      if (!groupedTransactions.has(date))
        groupedTransactions.set(date, {
          type: req.body.group,
          date: transaction.date.toISOString(),
          spent: 0,
          earned: 0,
          transactions: [],
        });
      const group = groupedTransactions.get(date)!;

      group.transactions.push(transaction);

      if (transaction.ignore) return;
      if (transaction.value > 0) group.earned += transaction.value;
      else group.spent += transaction.value;
    });

    return res.status(200).json(Object.values(Array.from(groupedTransactions.values())));
  } catch (error) {
    next(error);
  }
};

const getTransactionGroupBy = (group: Group, date: string): string => {
  switch (group) {
    case 'day':
      return format(date, 'yyyy-MM-dd');
    case 'week':
      return format(date, 'yyyy-ww');
    case 'month':
      return format(date, 'yyyy-MM');
    case 'year':
      return format(date, 'yyyy');
  }
};
