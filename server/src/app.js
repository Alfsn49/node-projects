import express from 'express'; //Importamos express
import indexRoutes from './routes/index.routes.js' // Importamos rutas


const app = express(); //Inicializamos express

app.use(express.json());//Para que express entienda json

app.use(indexRoutes);

export default app; //Exportar app