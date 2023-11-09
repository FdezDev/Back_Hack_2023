import { AuthAdminRepository } from "../domain/authAdminRepository";
import { PgsqlAuthAdminRepository } from "./pgsqlAuthAdminRepo";

export const authAdminRepository: AuthAdminRepository = new PgsqlAuthAdminRepository();