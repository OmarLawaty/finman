export const PORT = 2025;

export const TransactionTypes = {
  income: ['salary', 'gift', 'allowance', 'other'],
  expense: [
    'food',
    'snacks',
    'gift',
    'transport',
    'bills',
    'subscription',
    'shopping',
    'healthcare',
    'education',
    'other',
  ],
  transfer: ['transfer'],
} as const;
