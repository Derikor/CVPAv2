const ms = require('../models/User_Message');

function savemensaje(msj){
    let mensaje = new ms({
        title: "Mensaje de Usuario",
        mensaje:msj,
    });
    mensaje.save((err, res) => {
        if (err) return console.log(err);
        console.log("Se guardo un mensaje", res);
      });
   }
export{savemensaje};