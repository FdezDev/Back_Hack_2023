import express from 'express';
import { addCandidatesController } from './dependencies';
import { getCandidatesController } from './dependencies';

export const candidatesRouter = express.Router();

candidatesRouter.post('/addCandidates', 
    addCandidatesController.run.bind(addCandidatesController)
);

candidatesRouter.get('/getAllCandidates',
    getCandidatesController.run.bind(getCandidatesController)
);  