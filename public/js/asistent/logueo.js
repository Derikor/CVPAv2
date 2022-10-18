function validar (){
    var usuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;
    if(contraseña == "villacooperativa"||"villa cooperativa" && usuario == "centrodesalud"||"centro de salud"){
        location.href ="/reportmen";
    }else{
        document.getElementById("f").innerHTML = "usuario o contraseña incorrecta ";
            return false
    }
}