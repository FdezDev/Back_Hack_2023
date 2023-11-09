import { Sequelize } from 'sequelize-typescript';
import UsersModel from '../Users/infraestructure/models/usersModel';
import AdminModel from '../admin/infraestructure/models/adminModel';


export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'yeremi224',
    models: [UsersModel, AdminModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}