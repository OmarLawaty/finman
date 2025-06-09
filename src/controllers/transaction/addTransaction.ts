import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';
import { addTransactionToWallet } from '../helpers';

interface IRequest extends Request {
  body: ITransaction;
}

export const addTransaction = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const newTransaction = await Transaction.create<ITransaction>(req.body);

    await addTransactionToWallet(newTransaction);

    res.status(201).json(newTransaction);
  } catch (error) {
    next(error);
  }
};
