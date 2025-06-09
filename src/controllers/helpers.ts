import { Wallet, type ITransaction } from '../models';

export const addTransactionToWallet = async (transaction: ITransaction) => {
  const wallet = await Wallet.findById(transaction.walletId);
  if (!wallet) return;

  Wallet.updateOne({ _id: transaction.walletId }, { $push: { value: wallet?.value ?? 0 + transaction.value } });
};

export const removeTransactionFromWallet = async (transaction: ITransaction) => {
  const wallet = await Wallet.findById(transaction.walletId);
  if (!wallet) return;

  Wallet.updateOne({ _id: transaction.walletId }, { $push: { value: wallet?.value ?? 0 - transaction.value } });
};
