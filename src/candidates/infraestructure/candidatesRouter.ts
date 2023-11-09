import express from 'express';
import { AddCandidatesController } from './controller/addCandidatesController';
import { GetCandidatesController } from './controller/getCandidatesController';

export const candidatesRouter = express.Router();

candidatesRouter.post('/addCandidates', 
    AddCandidatesController.run.bind(AddCandidatesController)
);

candidatesRouter.get('/getAllCandidates',
    GetCandidatesController.run.bind(GetCandidatesController)
);  