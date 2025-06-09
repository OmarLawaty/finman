import { Router } from 'express';

import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransaction,
  getWalletTransaction,
  updateTransaction,
} from '../controllers';

export const transactionRouter = Router();

transactionRouter.post('/add', addTransaction);
transactionRouter.get('/', getTransaction);
transactionRouter.get('/all', getAllTransactions);
transactionRouter.get('/wallet', getWalletTransaction);
transactionRouter.put('/update', updateTransaction);
transactionRouter.delete('/delete', deleteTransaction);
