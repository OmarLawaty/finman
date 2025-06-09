import type { NextFunction, Request, Response } from 'express';

import { TransactionPrototype, type ITransactionPrototype } from '../../models';

interface IRequest extends Request {
  body: Partial<ITransactionPrototype>;
}

export const updatePrototype = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transactionPrototype = await TransactionPrototype.findOneAndUpdate<ITransactionPrototype>(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!transactionPrototype) return res.status(404);

    res.status(201).json({ ...transactionPrototype.toJSON(), ...req.body });
  } catch (error) {
    next(error);
  }
};
