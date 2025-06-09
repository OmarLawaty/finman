import mongoose, { Schema } from 'mongoose';

import type { ITransaction } from './types';

const TransactionSchema = new Schema<ITransaction>({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  walletId: {
    type: Schema.Types.ObjectId,
    ref: 'Wallet',
    required: true,
  },
  priority: {
    type: Number,
    default: 0,
  },
  ignore: {
    type: Boolean,
    default: false,
  },
});

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema);
export * from './types';
