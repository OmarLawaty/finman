import type { NextFunction, Request, Response } from 'express';

import { TransactionPrototype, type ITransactionPrototype } from '../../models';

export const getAllPrototypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const transactionPrototypes = await TransactionPrototype.find<ITransactionPrototype>();

    if (!transactionPrototypes) return res.status(404).json({ message: 'No transaction prototypes found' });

    res.status(200).json(transactionPrototypes);
  } catch (error) {
    next(error);
  }
};
