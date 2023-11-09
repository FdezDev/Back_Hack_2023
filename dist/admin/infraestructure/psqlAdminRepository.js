"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlAdminRepository = void 0;
const admin_1 = require("../domain/admin");
const adminModel_1 = __importDefault(require("./models/adminModel"));
class PgsqlAdminRepository {
    addAdmin(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdAdmin = yield adminModel_1.default.create({ name, email, password });
                return new admin_1.Admin(createdAdmin.id, createdAdmin.name, createdAdmin.email, createdAdmin.password);
            }
            catch (error) {
                console.error("Error in PgsqlClientsRepository:", error);
                return null;
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield adminModel_1.default.findAll();
                return admin.map(admin => new admin_1.Admin(admin.id, admin.name, admin.email, admin.password));
            }
            catch (error) {
                console.error("Error in PgsqlClientsRepository:", error);
                return [];
            }
        });
    }
    deleteUserById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.PgsqlAdminRepository = PgsqlAdminRepository;
