import { Response, NextFunction, Request } from 'express';

import { Wallet, type IBaseWallet } from '../../models';

interface IRequest extends Request {
  body: Partial<IBaseWallet>;
}

export const updateWallet = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const wallet = await Wallet.findOneAndUpdate<IBaseWallet>({ _id: req.body._id }, req.body, { new: true });

    if (!wallet) return res.status(404);

    res.status(201).json({ ...wallet.toJSON(), ...req.body });
  } catch (error) {
    next(error);
  }
};
