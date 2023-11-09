import express from "express";
import { addUsersController } from "./dependecies";


export const UsersRouter = express.Router();



// Ruta para agregar un nuevo usuario
UsersRouter.post(
    "/create",
    addUsersController.run.bind(addUsersController)
);


// Ruta para obtener todos los usuarios
//UsersRouter.get(
//    "/",
//    getClientsController.run.bind(getClientsController)
//);



