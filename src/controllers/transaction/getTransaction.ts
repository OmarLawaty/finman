import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';

interface IRequest extends Request {
  body: Pick<ITransaction, '_id'>;
}

export const getTransaction = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transaction = await Transaction.find<ITransaction>({ _id: req.body._id });

    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};
