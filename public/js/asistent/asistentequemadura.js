const artyom = new Artyom();
artyom.say("Bienvenido a la ventana de quemaduras",{lang:"es-ES"});
// CONFIGURACION CABECERA
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

$('#leequema').mouseover(function(){artyom.say("Leer el contenido")})
$('#q1').mouseover(function(){artyom.say("quemaduras",{lang:"es-ES"})})
$('#q1').mouseout(function(){artyom.shutUp()})
$('#lee1').mouseover(function(){artyom.say("Leer el contenido")})
$('#lee2').mouseover(function(){artyom.say("Leer el contenido")})
$('#lee3').mouseover(function(){artyom.say("Leer el contenido")})

function detente(){
    artyom.shutUp()
}

$('#leequema').click(function (e) {
    e.preventDefault();
    var q = $('#quema').text();
    var cla = $('#clasquema').text();
    if (artyom.speechSupported()) {
        artyom.say(q,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(cla,{
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

//lee las secciones
$('#lee1').click(function (e) {
    e.preventDefault();
    var a = $('#lee1t').text();
    var b = $('#lee1p').text();
    if (artyom.speechSupported()) {
        artyom.say(a,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(b,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
    } else {
        alert("Tu Navegador no puede hablar");
    }
});
$('#lee2').click(function (e) {
    e.preventDefault();
    var a = $('#lee2t').text();
    var b = $('#lee2p').text();
    if (artyom.speechSupported()) {
        artyom.say(a,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(b,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
    } else {
        alert("Tu Navegador no puede hablar");
    }
});
$('#lee3').click(function (e) {
    e.preventDefault();
    var a = $('#lee3t').text();
    var b = $('#lee3p').text();
    if (artyom.speechSupported()) {
        artyom.say(a,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
        artyom.say(b,{
            onStart:function(){
                console.log("Comenzando a leer texto");
            },
            onEnd:function(){
                console.log("Texto leido satisfactoriamente");
            }
        })
    } else {
        alert("Tu Navegador no puede hablar");
    }
});

artyom.fatality();// Detener cualquier instancia previa
setTimeout(function(){// Esperar 250ms para inicializar
    artyom.initialize({
       lang: "es-ES",// Más lenguajes son soportados
       continuous:true,// Artyom obedecera por siempre
       executionKeyword: "",
       listen:true, // Iniciar !
       debug:true, // Muestra un informe en la consola
       speed:1 // Habla normalmente
   }).then(function(){
       console.log('comenzando a escuchar');
   });
   },250);
   // Luego pausar reconocimiento de comandos
   artyom.dontObey();
   
   // Intenta ejecutar el comando decir hola ! y nada pasara,
   // pero en 10 segundos, el reconocimiento de comandos será reanudado
   setTimeout(function(){
   artyom.obey();
   
   // di decir hola y el comando será activado !
   }, 10000);


   artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches'],
        action: function(i){
            if (i==0){
                artyom.say("Bienvenido a la ventana de quemaduras");   
            }
            if (i==1 || i==2){
                artyom.say("buenos dias, Bienvenido a la ventana de quemaduras");   
            }
            if (i==3){
                artyom.say("buenas tardes, Bienvenido a la ventana de quemadauras");   
            }
            if (i==4){
                artyom.say("buenas noches, Bienvenido a la ventana de quemaduras");   
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
        indexes: ['volver al inicio','abrir quemaduras','abrir hemorragias','abrir heridas','hablar con el asistente','conversar con asistente'],
        action: function(i){
            if (i==0){
                artyom.say("volviendo a la ventana principal",{lang:"es-ES"}); 
                window.open("index.html",'_top');
            }
            if (i==1){
                artyom.say("abriendo ventana de quemaduras",{lang:"es-ES"});   
                window.open("quemaduras.html",'_top');
            }
            if (i==2){
                artyom.say("abriendo ventana de hemorragias",{lang:"es-ES"});   
                window.open("hemorragias.html",'_top');
            }
            if (i==3){
                artyom.say("abriendo ventana de heridas",{lang:"es-ES"});   
                window.open("heridas.html",'_top');
            }
            if (i==4 || i==5){
                artyom.say("abriendo ventana de asistente",{lang:"es-ES"});   
                window.open("/chat",'_top');
            }
         }
    },
    {
        indexes: ['leer quemaduras de primer grado','léeme los quemaduras de primer grado','le quemaduras de primer grado','léeme quemaduras de primer grado','léemelo quemaduras de primer grado'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee1t').text();
                    var b = $('#lee1p').text();
                    if (artyom.speechSupported()) {
                        artyom.say(a,{
                            onStart:function(){
                                console.log("Comenzando a leer texto");
                            },
                            onEnd:function(){
                                console.log("Texto leido satisfactoriamente");
                            }
                        })
                        artyom.say(b,{
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
        indexes: ['leer quemaduras de segundo grado','léeme los quemaduras de segundo grado','le quemaduras de segundo grado','léeme quemaduras de segundo grado','léemelo quemaduras de segundo grado'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee2t').text();
                    var b = $('#lee2p').text();
                    if (artyom.speechSupported()) {
                        artyom.say(a,{
                            onStart:function(){
                                console.log("Comenzando a leer texto");
                            },
                            onEnd:function(){
                                console.log("Texto leido satisfactoriamente");
                            }
                        })
                        artyom.say(b,{
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
        indexes: ['leer quemaduras de tercer grado','léeme los quemaduras de tercer grado','le quemaduras de tercer grado','léeme quemaduras de tercer grado','léemelo quemaduras de tercer grado'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee3t').text();
                    var b = $('#lee3p').text();
                    if (artyom.speechSupported()) {
                        artyom.say(a,{
                            onStart:function(){
                                console.log("Comenzando a leer texto");
                            },
                            onEnd:function(){
                                console.log("Texto leido satisfactoriamente");
                            }
                        })
                        artyom.say(b,{
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
 ]);

 
/*----------------------------pop------------------------------
--------------------------------------------------------------*/
var btabrir = document.getElementById('btn-abrir'),
    over = document.getElementById('over'),
    pop = document.getElementById('pop'),
    cer = document.getElementById('cer');

btabrir.addEventListener('click',function(){
    over.classList.add('active');
    pop.classList.add('active');
});
cer.addEventListener('click',function(){
    over.classList.remove('active');
    pop.classList.remove('active');
});
var btabrir1 = document.getElementById('btn-abrir1'),
    over1 = document.getElementById('over1'),
    pop1= document.getElementById('pop1'),
    cer1 = document.getElementById('cer1');

btabrir1.addEventListener('click',function(){
    over1.classList.add('active');
    pop1.classList.add('active');
});
cer1.addEventListener('click',function(){
    over1.classList.remove('active');
    pop1.classList.remove('active');
});

var btabrir2 = document.getElementById('btn-abrir2'),
    over2 = document.getElementById('over2'),
    pop2 = document.getElementById('pop2'),
    cer2 = document.getElementById('cer2');

btabrir2.addEventListener('click',function(){
    over2.classList.add('active');
    pop2.classList.add('active');
});
cer2.addEventListener('click',function(){
    over2.classList.remove('active');
    pop2.classList.remove('active');
});
var btabrir3 = document.getElementById('btn-abrir3'),
    over3 = document.getElementById('over3'),
    pop3= document.getElementById('pop3'),
    cer3 = document.getElementById('cer3');

btabrir3.addEventListener('click',function(){
    over3.classList.add('active');
    pop3.classList.add('active');
});
cer3.addEventListener('click',function(){
    over3.classList.remove('active');
    pop3.classList.remove('active');
});

var btabrir4 = document.getElementById('btn-abrir4'),
    over4 = document.getElementById('over4'),
    pop4 = document.getElementById('pop4'),
    cer4 = document.getElementById('cer4');

btabrir4.addEventListener('click',function(){
    over4.classList.add('active');
    pop4.classList.add('active');
});
cer4.addEventListener('click',function(){
    over4.classList.remove('active');
    pop4.classList.remove('active');
});
var btabrir5 = document.getElementById('btn-abrir5'),
    over5 = document.getElementById('over5'),
    pop5= document.getElementById('pop5'),
    cer5 = document.getElementById('cer5');

btabrir5.addEventListener('click',function(){
    over5.classList.add('active');
    pop5.classList.add('active');
});
cer5.addEventListener('click',function(){
    over5.classList.remove('active');
    pop5.classList.remove('active');
});
