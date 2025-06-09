import { Response, NextFunction, Request } from 'express';

import { Transaction, type ITransaction } from '../../models';

interface IRequest extends Request {
  body: Pick<ITransaction, 'walletId'>;
}

export const getWalletTransaction = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const walletTransaction = await Transaction.find<ITransaction>({ walletId: req.body.walletId });

    res.status(200).json(walletTransaction);
  } catch (error) {
    next(error);
  }
};
