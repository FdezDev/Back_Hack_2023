import { PgsqlAdminRepository } from "./psqlAdminRepository";

import { AddAdminUseCase } from "../application/addAdminUseCase";
import { AddAdminController } from "./controller/addAdminController";

export const pgsqlAdminRepository = new PgsqlAdminRepository();

export const addAdminUseCase = new AddAdminUseCase(pgsqlAdminRepository);
export const addAdminController = new AddAdminController(addAdminUseCase);

