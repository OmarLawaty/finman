import { Router } from 'express';
import { getAllPrototypes, getPrototype, makePrototype, updatePrototype } from '../controllers';

export const transactionPrototypeRouter = Router();

transactionPrototypeRouter.get('/', getPrototype);
transactionPrototypeRouter.get('/all', getAllPrototypes);
transactionPrototypeRouter.put('/update', updatePrototype);
transactionPrototypeRouter.delete('/delete', getPrototype);
transactionPrototypeRouter.post('/make', makePrototype);
