import type { Document, Types } from 'mongoose';

export interface IWallet extends IBaseWallet {
  date?: Date;
}

export interface IBaseWallet extends Document {
  name: string;
  value?: number;
  type: 'cash' | 'bank' | 'savings';
  isHidden?: boolean;
  isLocked?: boolean;
}
