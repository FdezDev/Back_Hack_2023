import express from 'express';
import { Signale } from 'signale';
import { initializeDatabase } from './database/sequelize'; 
import { UsersRouter } from './Users/infraestructure/usersRouter';
import { authRouter } from './authUser/infraestructure/authRouter';
import { authAdminRouter } from './authAdmin/infraestructure/authAdminRouter';


const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/user',UsersRouter);
app.use('auth',authRouter);
app.use('/authAdmin', authAdminRouter);

async function startServer() {
    try {

        // Luego inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Después inicia el servidor Express
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

// Inicia todo
startServer();