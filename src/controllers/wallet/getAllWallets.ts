import { Request, Response, NextFunction } from 'express';

import { Wallet, type IBaseWallet } from '../../models';

export const getAllWallets = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const allWallets = await Wallet.find<IBaseWallet>();

    res.status(200).json(allWallets);
  } catch (error) {
    next(error);
  }
};
