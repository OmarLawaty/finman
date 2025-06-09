import type { ITransaction } from '../transaction/types';

export type ITransactionPrototype = Exclude<ITransaction, 'date'>;
