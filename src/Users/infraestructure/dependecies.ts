
import { AddUserUseCase } from "../application/addUsersUseCase";
import { AddUsersController } from "./controller/addUsersController";
import { PgsqlUsersRepository } from "./psqlUsersRepository";

export const pgsqlUsersRepository = new PgsqlUsersRepository();

export const addUsersUseCase = new AddUserUseCase(pgsqlUsersRepository);
export const addUsersController = new AddUsersController(addUsersUseCase);

//export const getClientsUseCase = new GetClientsUseCase(pgsqlClientsRepository);
//export const getClientsController = new GetClientsController(getClientsUseCase);