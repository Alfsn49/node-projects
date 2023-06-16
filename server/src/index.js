import app from './app.js'; //Importamos app
import sequelize from './database/database.js'

async function main(){
    try{
        await sequelize.sync({force: false});
        console.log("Iniciando servidor...... en node");
        app.listen(3000);
        
        console.log("Servidor iniciado en el puerto 3000")
    }catch(error){
        console.error(error);
    }
}

main();