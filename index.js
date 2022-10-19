
const mongoose = require('mongoose');
const app = require('./app');
//puertos
app.set('port', process.env.PORT || 3000);
//variable base de datos
require('dotenv').config({ path: 'variables.env'})
//Base de datos CVPA
 mongoose.connect(
    process.env.DB_URL
    ,(err,res)=> {
        if  (err) return console.log("Se produjo un error en la conexion de BD", err);
        console.log("Base de Datos conexionada");

    }
);

//Empezando en el servidor
app.listen(app.get('port'), () =>{
    console.log("servidor web iniciado en el puerto.", app.get('port'));
})




