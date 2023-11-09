import expres from 'express';
import { AuthAdminController } from '../../authAdmin/infraestructure/controller/authAdminController';
import { AuthAdminCase } from '../application/authAdminCase'
import { PgsqlAuthAdminRepository } from './pgsqlAuthAdminRepo';

const authAdminRepository = new PgsqlAuthAdminRepository();
const authAdminCase = new AuthAdminCase(authAdminRepository);
const authAdminController = new AuthAdminController(authAdminCase);

const authAdminRouter = expres.Router();

authAdminRouter.post('/loginAdmin', authAdminController.run.bind(authAdminController));

export { authAdminRouter };