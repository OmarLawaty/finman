import { Response, NextFunction, Request } from 'express';

import { Wallet, type IBaseWallet } from '../../models';

interface IRequest extends Request {
  body: Pick<IBaseWallet, '_id'>;
}

export const getWallet = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const wallet = await Wallet.findOne<IBaseWallet>({ _id: req.body._id });

    res.status(200).json(wallet);
  } catch (error) {
    next(error);
  }
};
