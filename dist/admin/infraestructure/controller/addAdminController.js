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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAdminController = void 0;
class AddAdminController {
    constructor(addAdminusecase) {
        this.addAdminusecase = addAdminusecase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                const addadmin = yield this.addAdminusecase.run(name, email, password);
                if (addadmin) {
                    return res.status(201).send({
                        status: "success",
                        data: addadmin,
                        message: "Admin created successfully"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "error",
                        data: [],
                        message: "Error creating new client, please try again later"
                    });
                }
            }
            catch (error) {
                console.error("Error in CreateClientsController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.AddAdminController = AddAdminController;
