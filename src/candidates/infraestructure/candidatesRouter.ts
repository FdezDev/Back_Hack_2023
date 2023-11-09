import express from 'express';
import { AddCandidatesController } from './controller/addCandidatesController';

export const candidatesRouter = express.Router();

candidatesRouter.post('/addCandidates', 
    AddCandidatesController.run.bind(AddCandidatesController)
);