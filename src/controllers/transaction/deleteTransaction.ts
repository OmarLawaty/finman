import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';
import { removeTransactionFromWallet } from '../helpers';

interface IRequest extends Request {
  body: Pick<ITransaction, '_id'>;
}

export const deleteTransaction = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transaction = await Transaction.findOneAndDelete<ITransaction>({ _id: req.body._id });
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    await removeTransactionFromWallet(transaction);

    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};
