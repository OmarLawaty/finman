import type { Document, Types } from 'mongoose';

export interface ITransaction extends Document {
  walletId: Types.ObjectId;
  type: string;
  name: string;
  value: number;
  date?: Date;
  priority?: number;
  ignore?: boolean;
}
