import { Router } from 'express';

import { createWallet, deleteWallet, getAllWallets, getWallet, updateWallet } from '../controllers';

export const walletRouter = Router();

walletRouter.post('/create', createWallet);
walletRouter.put('/update', updateWallet);
walletRouter.delete('/delete', deleteWallet);
walletRouter.get('/', getWallet);
walletRouter.get('/all', getAllWallets);
