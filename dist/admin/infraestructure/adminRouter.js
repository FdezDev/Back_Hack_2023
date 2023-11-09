"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependecies_1 = require("./dependecies");
exports.AdminRouter = express_1.default.Router();
// Ruta para agregar un nuevo usuario
exports.AdminRouter.post("/create", dependecies_1.addAdminController.run.bind(dependecies_1.addAdminController));
