import mongoose from 'mongoose';

import { TransactionSchema, type ITransaction } from '../transaction';

export const TransactionPrototype = mongoose.model<ITransaction>('TransactionPrototype', TransactionSchema);
export * from './types';
