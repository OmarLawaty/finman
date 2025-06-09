import mongoose, { Schema } from 'mongoose';

import type { IWallet } from './types';

const WalletSchema = new Schema<IWallet>({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'cash',
    required: true,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Wallet = mongoose.model<IWallet>('Wallet', WalletSchema);
export * from './types';
