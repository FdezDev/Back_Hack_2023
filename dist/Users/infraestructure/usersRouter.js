"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependecies_1 = require("./dependecies");
exports.UsersRouter = express_1.default.Router();
// Ruta para agregar un nuevo usuario
exports.UsersRouter.post("/create", dependecies_1.addUsersController.run.bind(dependecies_1.addUsersController));
// Ruta para obtener todos los usuarios
//UsersRouter.get(
//    "/",
//    getClientsController.run.bind(getClientsController)
//);
