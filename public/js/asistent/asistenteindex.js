const artyom = new Artyom();
artyom.say("Bienvenido al Consultorio Virtual de Primeros Auxilios, en qué puedo ayudarle",{lang:"es-ES"});
// CONFIGURACION CABECERA   
$('#empe').mouseover(function(){artyom.say("Empezar",{lang:"es-ES"})})
$('#inicio').mouseover(function(){artyom.say("Inicio",{lang:"es-ES"})})
$('#inicio').mouseout(function(){artyom.shutUp()})
$('#primaux').mouseover(function(){artyom.say("Primeros Auxilios",{lang:"es-ES"})})
$('#primaux').mouseout(function(){artyom.shutUp()})
    $('a#definicion').mouseover(function(){artyom.say("definición",{lang:"es-ES"})})
    $('a#definicion').mouseout(function(){artyom.shutUp()})
    $('a#heridas').mouseover(function(){artyom.say("enlace a heridas",{lang:"es-ES"})})
    $('a#heridas').mouseout(function(){artyom.shutUp()})
    $('a#quemaduras').mouseover(function(){artyom.say("enlace a quemaduras",{lang:"es-ES"})})
    $('a#quemaduras').mouseout(function(){artyom.shutUp()})
    $('a#hemorragias').mouseover(function(){artyom.say("enlace a hemorragias",{lang:"es-ES"})})
    $('a#hemorragias').mouseout(function(){artyom.shutUp()})
$('#conversar').mouseover(function(){artyom.say("asistente virtual",{lang:"es-ES"})})
$('#conversar').mouseout(function(){artyom.shutUp()})
$('a#con').mouseover(function(){artyom.say("conversar",{lang:"es-ES"})})
    $('a#con').mouseout(function(){artyom.shutUp()})
$('#inisesion').mouseover(function(){artyom.say("iniciar sesión",{lang:"es-ES"})})
$('#inisesion').mouseout(function(){artyom.shutUp()})
$('a#leepa').mouseover(function(){artyom.say("Leer el contenido",{lang:"es-ES"})})
$('a#b').mouseover(function(){artyom.say("Leer el contenido",{lang:"es-ES"})})
$('a#her').mouseover(function(){artyom.say("heridas",{lang:"es-ES"})})
$('a#her').mouseout(function(){artyom.shutUp()})
$('a#quem').mouseover(function(){artyom.say("quemaduras",{lang:"es-ES"})})
$('a#quem').mouseout(function(){artyom.shutUp()})
$('a#hemo').mouseover(function(){artyom.say("hemorragias",{lang:"es-ES"})})
$('a#hemo').mouseout(function(){artyom.shutUp()})


artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches','gracias','consulta'],
        action: function(i){
            if (i==0){
                artyom.say("Buenas, Bienvenido sea usted",{lang:"es-ES"});   
            }
            if (i==1 || i==2){
                artyom.say("buenos dias que desea consultar",{lang:"es-ES"});   
            }
            if (i==3){
                artyom.say("buenas tardes que desea consultar",{lang:"es-ES"});   
            }
            if (i==4){
                artyom.say("buenas noches que desea consultar",{lang:"es-ES"});   
            }
            if (i==5){
                artyom.say("de nada",{lang:"es-ES"});   
            }
            if (i==6){
                artyom.say("digame en que puedo ayudarle",{lang:"es-ES"});   
            }
         }
    },
    {
        indexes: ['volver al inicio','ir al inicio','abrir quemaduras','ir a quemaduras','abrir hemorragias','ir a hemorragias','abrir heridas','ir a heridas','hablar con el asistente','conversar con asistente'],
        action: function(i){
            if (i==0 || i==1){
                artyom.say("volviendo a la ventana principal",{lang:"es-ES"}); 
                window.open("index.html",'_top');
            }
            if (i==2 || i==3){
                artyom.say("abriendo ventana de quemaduras",{lang:"es-ES"});   
                window.open("quemaduras.html",'_top');
            }
            if (i==4 || i== 5){
                artyom.say("abriendo ventana de hemorragias",{lang:"es-ES"});   
                window.open("hemorragias.html",'_top');
            }
            if (i==6 || i==7){
                artyom.say("abriendo ventana de heridas",{lang:"es-ES"});   
                window.open("heridas.html",'_top');
            }
            if (i==8 || i==9){
                artyom.say("abriendo ventana de asistente",{lang:"es-ES"});   
                window.open("/chat",'_top');
            }
         }
    },
    {
        indexes: ['leer','leer primeros auxilios','leer el contenido'],
        action: function(i){
            if (i==0 || i==1 || i==2){
                    var pa = $('#pa').text();
                    var p = $('#defpa').text();
                    if (artyom.speechSupported()) {
                        artyom.say(pa,{
                            onStart:function(){
                                console.log("Comenzando a leer texto");
                            },
                            onEnd:function(){
                                console.log("Texto leido satisfactoriamente");
                            }
                        })
                        artyom.say(p,{
                            onStart:function(){
                                console.log("Comenzando a leer texto");
                            },
                            onEnd:function(){
                                console.log("Texto leido satisfactoriamente");
                            }
                        });
                    } else {
                        alert("Tu Navegador no puede hablar");
                    }
            }
         }
    },
    {
        indexes: ['heridas','herida','quemaduras','quemadura','hemorragias','hemorragia'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4 || i==5){
                artyom.say("para realizar consultas de asistencia por voz debe ingresar a la ventana conversar con asistente");   
            }
         }
    },
    {
        indexes: ['alto','detente','silencio','stop'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3){
                artyom.shutUp() 
            }
         }
    },
 ]);

 artyom.redirectRecognizedTextOutput(function(text,isfinal){
     var span = $('#salida');
     if(isfinal){
         span.val(text);
     }
 });
 function detente(){
    artyom.shutUp()
}


function startOneCommandArtyom(){
    artyom.fatality();// Detener cualquier instancia previa

    setTimeout(function(){// Esperar 250ms para inicializar
         artyom.initialize({
            lang:"es-ES",// Más lenguajes son soportados, lee la documentación
            continuous:false,// Reconoce 1 solo comando y basta de escuchar
            listen:true, // Iniciar !
            debug:true, // Muestra un informe en la consola
            speed:1 // Habla normalmente
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

 $('#leepa').click(function (e) {
    e.preventDefault();
    var p = $('#defpa').text();
    if (artyom.speechSupported()) {
        artyom.say(p,{lang:"es-ES"},{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        });
    } else {
        alert("Tu Navegador no puede hablar");
    }
});
$('a#b').click(function (e) {
    e.preventDefault();
    var p = $('#bie').text();
    if (artyom.speechSupported()) {
        artyom.say(p,{lang:"es-ES"},{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        });
    } else {
        alert("Tu Navegador no puede hablar");
    }
});