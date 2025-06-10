import type { Document, Types } from 'mongoose';
import type { TransactionTypes } from '../../const';

export interface ITransaction extends Document {
  walletId: Types.ObjectId;
  type: TransactionName;
  name: string;
  value: number;
  date: Date;
  priority?: number;
  ignore?: boolean;
}

export interface IGroupedTransactions<type extends Group = Group> {
  type: type;
  date: string;
  spent: number;
  earned: number;
  transactions: ITransaction[];
}

export type Group = 'day' | 'week' | 'month' | 'year';
export type TransactionType = keyof typeof TransactionTypes;
export type TransactionName = (typeof TransactionTypes)[TransactionType][number];
export type IncomeTransaction = (typeof TransactionTypes)['income'][number];
export type ExpenseTransaction = (typeof TransactionTypes)['expense'][number];
export type TransferTransaction = (typeof TransactionTypes)['transfer'][number];
