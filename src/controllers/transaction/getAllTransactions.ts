import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';

export const getAllTransactions = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const allTransaction = await Transaction.find<ITransaction>();

    res.status(200).json(allTransaction);
  } catch (error) {
    next(error);
  }
};
