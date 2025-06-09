import type { NextFunction, Request, Response } from 'express';

import { TransactionPrototype, type ITransactionPrototype } from '../../models';

interface IRequest extends Request {
  body: Pick<ITransactionPrototype, '_id'>;
}

export const getPrototype = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transactionPrototype = await TransactionPrototype.findById<ITransactionPrototype>(req.body._id);

    if (!transactionPrototype) return res.status(404).json({ message: 'Transaction Prototype not found' });

    res.status(200).json(transactionPrototype);
  } catch (error) {
    next(error);
  }
};
