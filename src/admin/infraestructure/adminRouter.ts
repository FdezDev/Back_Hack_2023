import express from "express";
import { addAdminController } from "./dependecies";



export const AdminRouter = express.Router();



// Ruta para agregar un nuevo usuario
AdminRouter.post(
    "/create",
    addAdminController.run.bind(addAdminController)
);

