import { Response, NextFunction, Request } from 'express';

import { Wallet, type IBaseWallet } from '../../models';

interface IRequest extends Request {
  body: IBaseWallet;
}

export const createWallet = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const newWallet = await Wallet.create<IBaseWallet>(req.body);

    res.status(201).json(newWallet);
  } catch (error) {
    next(error);
  }
};
