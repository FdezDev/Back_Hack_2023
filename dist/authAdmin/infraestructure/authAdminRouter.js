"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const authAdminController_1 = require("../../authAdmin/infraestructure/controller/authAdminController");
const authAdminCase_1 = require("../application/authAdminCase");
const pgsqlAuthAdminRepo_1 = require("./pgsqlAuthAdminRepo");
const authAdminRepository = new pgsqlAuthAdminRepo_1.PgsqlAuthAdminRepository();
const authAdminCase = new authAdminCase_1.AuthAdminCase(authAdminRepository);
const authAdminController = new authAdminController_1.AuthAdminController(authAdminCase);
const authAdminRouter = express_1.default.Router();
exports.authAdminRouter = authAdminRouter;
authAdminRouter.post('/loginAdmin', authAdminController.run.bind(authAdminController));
