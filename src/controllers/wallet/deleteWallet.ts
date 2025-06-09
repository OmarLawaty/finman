import { Response, NextFunction, Request } from 'express';

import { Wallet, type IBaseWallet } from '../../models';

interface IRequest extends Request {
  body: Pick<IBaseWallet, '_id'>;
}

export const deleteWallet = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const newWallet = await Wallet.findOneAndDelete<IBaseWallet>({ _id: req.body._id });

    res.status(201).json(newWallet);
  } catch (error) {
    next(error);
  }
};
