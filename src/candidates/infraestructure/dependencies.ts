import { PgsqlCandidatesRepository } from "./psqlCandidatesRepo";
import { AddCandidatesCase } from "../application/addCandidatesCase";
import { AddCandidatesController } from "./controller/addCandidatesController";
import { GetCandidatesController } from "./controller/getCandidatesController";
import { GetCandidatesCase } from "../application/getCandidatesCase";

export const psqlCandidatesRepository = new PgsqlCandidatesRepository();
export const addCandidatesCase = new AddCandidatesCase(psqlCandidatesRepository);
export const addCandidatesController = new AddCandidatesController(addCandidatesCase);

export const getCandidatesCase = new GetCandidatesCase(psqlCandidatesRepository);
export const getCandidatesController = new GetCandidatesController(getCandidatesCase);
