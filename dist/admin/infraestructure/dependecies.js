"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAdminController = exports.addAdminUseCase = exports.pgsqlAdminRepository = void 0;
const psqlAdminRepository_1 = require("./psqlAdminRepository");
const addAdminUseCase_1 = require("../application/addAdminUseCase");
const addAdminController_1 = require("./controller/addAdminController");
exports.pgsqlAdminRepository = new psqlAdminRepository_1.PgsqlAdminRepository();
exports.addAdminUseCase = new addAdminUseCase_1.AddAdminUseCase(exports.pgsqlAdminRepository);
exports.addAdminController = new addAdminController_1.AddAdminController(exports.addAdminUseCase);
