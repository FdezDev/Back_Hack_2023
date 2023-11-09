import { PgsqlCandidatesRepository } from "./psqlCandidatesRepo";
import { AddCandidatesCase } from "../application/addCandidatesCase";
import { AddCandidatesController } from "./controller/addCandidatesController";

export const psqlCandidatesRepository = new PgsqlCandidatesRepository();
export const addCandidatesCase = new AddCandidatesCase(psqlCandidatesRepository);
export const addCandidatesController = new AddCandidatesController(addCandidatesCase);
