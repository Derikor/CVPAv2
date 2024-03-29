const artyom = new Artyom();

// CONFIGURACION CABECERA
$('button#emp').mouseover(function(){artyom.say("Consultar",{lang:"es-ES"})})
$('button#emp').mouseout(function(){artyom.shutUp()})

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


function detente(){
    artyom.shutUp()
}

artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches','gracias','consulta'],
        action: function(i){
            if (i==0){
                artyom.say("Hola, Bienvenido sea usted",{lang:"es-ES"});   
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
        indexes: ['alto','detente','silencio','stop'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3){
                artyom.shutUp() 
            }
         }
    },
    {
        indexes: ['volver al inicio','abrir quemaduras','abrir hemorragias','abrir heridas','iniciar sesión','inicio de sesión'],
        action: function(i){
            if (i==0){
                artyom.say("volviendo a la ventana principal",{lang:"es-ES"}); 
                window.open("index.html",'_top');
            }
            if (i==1){
                artyom.say("abriendo ventana de quemaduras",{lang:"es-ES"});   
                window.open("quemadura.html",'_top');
            }
            if (i==2){
                artyom.say("abriendo ventana de hemorragias",{lang:"es-ES"});   
                window.open("hemorragia.html",'_top');
            }
            if (i==3){
                artyom.say("abriendo ventana de heridas",{lang:"es-ES"});   
                window.open("herida.html",'_top');
            }
            if (i==4 || i==5){
                artyom.say("iniciando sesión",{lang:"es-ES"});   
                window.open("login.html",'_top');
            }
         }
    },
    {
        indexes: ['tipos de quemaduras','qué hacer en caso de una quemadura','como procedo ante una quemadura','qué hago en caso de una quemadura menor','cómo procedo ante una quemadura de primer grado','qué hago en caso de una quemadura de primer grado','diferencia entre los tipos de grados de las quemaduras','deferencia entre los tipos de quemaduras'],
        action: function(i){
            if (i==0){
                artyom.say("existen quemaduras de primer grado de segundo grado y de tercer grado",{lang:"es-ES"});   
            }
            if (i==1 || i==2){
                artyom.say("mencione el tipo de quemadura que presenta",{lang:"es-ES"});   
            }
            if (i==3 || i==4 || i==5){
                artyom.say("En caso de una quemadura menor o de primer grado",{lang:"es-ES"});
                artyom.say("Deje correr abundante agua fría sobre el área afectada o mantenga la zona de quemadura en un espacio llena de agua fría",{lang:"es-ES"});
                artyom.say("Permanesca de entre 10 a 30 min mientras va calmando y reconfortando a la persona",{lang:"es-ES"});
                artyom.say("proteja el área afectada de posibles rozamientos",{lang:"es-ES"});
                artyom.say("Una vez que se enfríe el área afetada de la piel, coloque loción humectante que contenga áloe para ayudar",{lang:"es-ES"});
                artyom.say("Por ultimo cubrir el área afectada con vendaje estéril",{lang:"es-ES"});
            }
            if (i==6 || i==7){
                artyom.say("primer grado,Afectan solo la capa externa de la piel. Causan dolor, enrojecimiento e hinchazón",{lang:"es-ES"});   
            }
         }
    },
    {
        indexes: ['tipos de hemorragias','qué son las hemorragias internas','qué es una hemorragia interna','qué son las hemorragias externas','qué es una hemorragia externa','qué hacer en caso de una hemorragia','qué hago en caso de una hemorragia','qué hago en caso de una hemorragia externa','cómo procedo ante una hemorragia externa','qué hacer en caso de una hemorragia externa','qué hago en caso de una hemorragia interna'],
        action: function(i){
            if (i==0){
                artyom.say("existen hemorragias internas y hemorragias externas",{lang:"es-ES"});   
            }
            if (i==1 || i==2){
                artyom.say("hemorragias internas, se producen por la ruptura de vasos sanguineos que se quedan dentro del cuerpo, principalmente en la parte del abdomen, son causadas por: enfermedades de intestino o estómago, transtornos vasculares y traumatismos",{lang:"es-ES"});   
            }
            if (i==3 || i==4){
                artyom.say("hemorragias externas, son producidas por la salida de sangre al exterior a través de la piel producidas por heridas abiertas o por orificios del cuerpo, ya sean por la nariz, boca, ano, meato urinario y oidos",{lang:"es-ES"});   
            }
            if (i==5 || i==6){
                artyom.say("debe proceder a detener la hemorragia para ello especifique si la hemorragia es interna o externa y proceder con la explicación de la asistencia",{lang:"es-ES"});   
            }
            if (i==7 || i==8 || i==9){
                artyom.say("En caso de una hemorragia externa",{lang:"es-ES"});
                artyom.say("Primeramente debe aplicar compresion local, para detener el sangrado, ya sea con uno o dos dedos o con la mano presionando fuertemente.",{lang:"es-ES"});
                artyom.say("Una vez haya cesado el sangrado realizar un vendaje compresivo para mantener aislado de bacterias",{lang:"es-ES"});
                artyom.say("Se utiliza torniquete solo en caso de extremidades y cuando la compresion no es suficiente, se utiliza como ultimo recurso ya que tiene sus riesgos",{lang:"es-ES"});
                artyom.say("por ultimo llevar a emergencias para un tratamiento adecuado",{lang:"es-ES"});
            }
            if(i==10){
                artyom.say("En caso de una hemorragia interna",{lang:"es-ES"});
                artyom.say("recueste a la persona en la postura de seguridad, por si producen vomitos y no le provoquen asfixia.",{lang:"es-ES"});
                artyom.say("y luego proceda a llamar a personal medico o emergencias inmediatamente",{lang:"es-ES"});
            }
         }
    },
    {
        indexes: ['tipos de heridas','heridas por incisión','herida por incisión','heridas por contusión','herida por contusión','qué hacer en caso de una herida','qué hago en caso de una herida','qué hago en caso de una herida contusa','qué hago en caso de una herida por golpe','qué hago en caso de un golpe','golpe'],
        action: function(i){
            if (i==0){
                artyom.say("existen diferentes tipos de heridas entre las cuales tenemos",{lang:"es-ES"});
                artyom.say("heridas: por incisión, por contusión, superficiales, por su profundidad, y por excoriación",{lang:"es-ES"});   
            }
            if (i==1 || i==2){
                artyom.say("causadas por objetos afilados que generan daño en la piel",{lang:"es-ES"});   
            }
            if (i==3 || i==4){
                artyom.say("Son lesiones que aparecen cuando se produce un golpe, caída o cualquier impacto sobre la piel, sin ocasionar heridas abiertas. Es necesario prestar atención, porque pueden ocasionar daños en los músculos, tendones e incluso órganos, dando como resultado hemorragias internas",{lang:"es-ES"});   
            }
            if (i==5 || i==6){
                artyom.say("En caso de una herida",{lang:"es-ES"});
                artyom.say("debe Preparar gasas, antiséptico, tiritas, guantes, desinfectar pinzas y tijeras (limpiándolas con una gasa empapada en alcohol y luego secándola con otra estéril), etc., todo sobre una superficie limpia. ",{lang:"es-ES"});
                artyom.say("Lavado de manos con agua y jabón. ",{lang:"es-ES"});
                artyom.say("Descubrir el tipo de herida que este presentando",{lang:"es-ES"});
                artyom.say("Realizar la asistencia de acuerdo al tipo de herida",{lang:"es-ES"});
            }
            if (i==7 || i==8 || i==9 || i==10){
                artyom.say("En caso de una herida contusa o por golpe",{lang:"es-ES"});
                artyom.say("El primer paso que debe realizar, es la aplicacion del frio (compresas de hielo) en el área afectada",{lang:"es-ES"});
                artyom.say("Importante: no aplicar directamente el hielo sobre la piel",{lang:"es-ES"});
                artyom.say("Debe guardar reposo de la zona afectada",{lang:"es-ES"});
                artyom.say("Puede aplicar vendaje compresivo para cubrir la zona",{lang:"es-ES"});
            }
         }
    },
    {
        indexes: ['limpiar'],
        action: function(){
          artyom.say("Limpiando conversación");
          $('#salida').val('');
         }
    },   
 ]);

function enter(e){
    var m = $('#salida')
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13)  artyom.simulateInstruction(m.val());
    if (tecla==13) $('#sub').click();
}

$('#sub').click(function(){artyom.simulateInstruction($('#salida').val())})


 artyom.redirectRecognizedTextOutput(function(text,isfinal){
    var span = $('#salida');
    if(isfinal){
        span.val(text);
    }
});


// Esta funcion inicia artyom en el reconocimiento continuo y obedecera comandos por siempre (requiere conexión https para prevenir el dialogo de permiso de microfono continuo)
function start(){
artyom.fatality();// Detener cualquier instancia previa

setTimeout(function(){// Esperar 250ms para inicializar
 artyom.initialize({
    lang: "es-ES",// Más lenguajes son soportados
    continuous:false,// Artyom obedecera por siempre
    executionKeyword: "",
    listen:true, // Iniciar !
    debug:true, // Muestra un informe en la consola
    speed:1 // Habla normalmente
}).then(function(){
    console.log('comenzando a escuchar');
});
},250);
}
// Luego pausar reconocimiento de comandos
artyom.dontObey();

// Intenta ejecutar el comando decir hola ! y nada pasara,
// pero en 10 segundos, el reconocimiento de comandos será reanudado
setTimeout(function(){
artyom.obey();

// di decir hola y el comando será activado !
}, 10000);

 function stop(){
     artyom.fatality();
 }