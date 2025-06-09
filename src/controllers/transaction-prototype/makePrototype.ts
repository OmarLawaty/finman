import type { NextFunction, Request, Response } from 'express';

import { TransactionPrototype, type ITransactionPrototype } from '../../models';

interface IRequest extends Request {
  body: ITransactionPrototype;
}

export const makePrototype = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const transactionPrototype = await TransactionPrototype.create<ITransactionPrototype>(req.body);

    res.status(201).json(transactionPrototype);
  } catch (error) {
    next(error);
  }
};
