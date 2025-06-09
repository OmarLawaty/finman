import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';

interface IRequest extends Request {
  body: Partial<ITransaction>;
}

export const updateTransaction = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transaction = await Transaction.findOneAndUpdate<ITransaction>({ _id: req.body._id }, req.body, {
      new: true,
    });

    if (!transaction) return res.status(404);

    res.status(201).json({ ...transaction.toJSON(), ...req.body });
  } catch (error) {
    next(error);
  }
};
