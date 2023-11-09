"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatesRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
exports.candidatesRouter = express_1.default.Router();
exports.candidatesRouter.post('/addCandidates', dependencies_1.addCandidatesController.run.bind(dependencies_1.addCandidatesController));
exports.candidatesRouter.get('/getAllCandidates', dependencies_2.getCandidatesController.run.bind(dependencies_2.getCandidatesController));
