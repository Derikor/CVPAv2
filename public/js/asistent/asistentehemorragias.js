const artyom = new Artyom();
artyom.say("Bienvenido a la ventana de hemorragias",{lang:"es-ES"});
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

$('#leehemor').mouseover(function(){artyom.say("Leer el contenido")})
$('#hem').mouseover(function(){artyom.say("hemorragias",{lang:"es-ES"})})
$('#hem').mouseout(function(){artyom.shutUp()})

function detente(){
    artyom.shutUp()
}

$('#leehemor').click(function (e) {
    e.preventDefault();
    var a = $('#leehemo').text();
    var b = $('#leehem').text();
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
});
// lee los articulos
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
$('#lee4').click(function (e) {
    e.preventDefault();
    var a = $('#lee4t').text();
    var b = $('#lee4p').text();
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
$('#lee5').click(function (e) {
    e.preventDefault();
    var a = $('#lee5t').text();
    var b = $('#lee5p').text();
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
$('#lee6').click(function (e) {
    e.preventDefault();
    var a = $('#lee6t').text();
    var b = $('#lee6p').text();
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
$('#lee7').click(function (e) {
    e.preventDefault();
    var a = $('#lee7t').text();
    var b = $('#lee7p').text();
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
$('#lee8').click(function (e) {
    e.preventDefault();
    var a = $('#lee8t').text();
    var b = $('#lee8p').text();
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



//comandos-------------------------------------------------------------------------------------------------------------------------------------

   artyom.addCommands([
    {
        indexes: ['Hola','buen día','buenos días','buenas tardes','buenas noches'],
        action: function(i){
            if (i==0){
                artyom.say("Bienvenido a la ventana de hemorragias");   
            }
            if (i==1 || i==2){
                artyom.say("buenos dias, Bienvenido a la ventana de hemorragias");   
            }
            if (i==3){
                artyom.say("buenas tardes, Bienvenido a la ventana de hemorragias");   
            }
            if (i==4){
                artyom.say("buenas noches, Bienvenido a la ventana de hemorragias");   
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
        indexes: ['leer','leer hemorragias','leer el contenido'],
        action: function(i){
            if (i==0 || i==1 || i==2){
                    var a = $('#leehemo').text();
                    var b = $('#leehem').text();
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
        indexes: ['leer hemorragia de oído','léeme los hemorragia de oído','le hemorragia de oído','léeme hemorragia de oído','léemelo hemorragia de oído'],
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
        indexes: ['leer hemorragia de nariz','léeme los hemorragia de nariz','le hemorragia de nariz','léeme hemorragia de nariz','léemelo hemorragia de nariz'],
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
        indexes: ['leer hemorragia bucal','léeme los hemorragia bucal','le hemorragia bucal','léeme hemorragia bucal','léemelo hemorragia bucal'],
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
    {
        indexes: ['leer rectorragia','léeme rectorragia','le rectorragia','léeme rectorragia','léemelo rectorragia'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee4t').text();
                    var b = $('#lee4p').text();
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
        indexes: ['leer metrorragia','léeme los metrorragia','le metrorragia','léeme metrorragia','léemelo metrorragia'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee5t').text();
                    var b = $('#lee5p').text();
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
        indexes: ['leer hemorragia capilar','léeme los hemorragia capilar','le hemorragia capilar','léeme hemorragia capilar','léemelo hemorragia capilar'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee6t').text();
                    var b = $('#lee6p').text();
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
        indexes: ['leer hemorragia venosa','léeme los hemorragia venosa','le hemorragia venosa','léeme hemorragia venosa','léemelo hemorragia venosa'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee7t').text();
                    var b = $('#lee7p').text();
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
        indexes: ['leer hemorragia arterial','léeme los hemorragia arterial','le hemorragia arterial','léeme hemorragia arterial','léemelo hemorragia arterial'],
        action: function(i){
            if (i==0 || i==1 || i==2 || i==3 || i==4){
                    var a = $('#lee8t').text();
                    var b = $('#lee8p').text();
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
/*----------------------------pop------------------------------
--------------------------------------------------------------*/
var btabrir6 = document.getElementById('btn-abrir6'),
    over6 = document.getElementById('over6'),
    pop6 = document.getElementById('pop6'),
    cer6 = document.getElementById('cer6');

btabrir6.addEventListener('click',function(){
    over6.classList.add('active');
    pop6.classList.add('active');
});
cer6.addEventListener('click',function(){
    over6.classList.remove('active');
    pop6.classList.remove('active');
});
var btabrir7 = document.getElementById('btn-abrir7'),
    over7 = document.getElementById('over7'),
    pop7= document.getElementById('pop7'),
    cer7 = document.getElementById('cer7');

btabrir7.addEventListener('click',function(){
    over7.classList.add('active');
    pop7.classList.add('active');
});
cer7.addEventListener('click',function(){
    over7.classList.remove('active');
    pop7.classList.remove('active');
});

var btabrir8 = document.getElementById('btn-abrir8'),
    over8 = document.getElementById('over8'),
    pop8 = document.getElementById('pop8'),
    cer8 = document.getElementById('cer8');

btabrir8.addEventListener('click',function(){
    over8.classList.add('active');
    pop8.classList.add('active');
});
cer8.addEventListener('click',function(){
    over8.classList.remove('active');
    pop8.classList.remove('active');
});
var btabrir9 = document.getElementById('btn-abrir9'),
    over9 = document.getElementById('over9'),
    pop9= document.getElementById('pop9'),
    cer9 = document.getElementById('cer9');

btabrir9.addEventListener('click',function(){
    over9.classList.add('active');
    pop9.classList.add('active');
});
cer9.addEventListener('click',function(){
    over9.classList.remove('active');
    pop9.classList.remove('active');
});

var btabrir10 = document.getElementById('btn-abrir10'),
    over10 = document.getElementById('over10'),
    pop10 = document.getElementById('pop10'),
    cer10 = document.getElementById('cer10');

btabrir10.addEventListener('click',function(){
    over10.classList.add('active');
    pop10.classList.add('active');
});
cer10.addEventListener('click',function(){
    over10.classList.remove('active');
    pop10.classList.remove('active');
});
var btabrir11 = document.getElementById('btn-abrir11'),
    over11 = document.getElementById('over11'),
    pop11= document.getElementById('pop11'),
    cer11 = document.getElementById('cer11');

btabrir11.addEventListener('click',function(){
    over11.classList.add('active');
    pop11.classList.add('active');
});
cer11.addEventListener('click',function(){
    over11.classList.remove('active');
    pop11.classList.remove('active');
});
/*----------------------------pop------------------------------
--------------------------------------------------------------*/
var btabrir12 = document.getElementById('btn-abrir12'),
    ove12 = document.getElementById('over12'),
    po12 = document.getElementById('pop12'),
    ce12 = document.getElementById('cer12');

btabrir12.addEventListener('click',function(){
    over12.classList.add('active');
    pop12.classList.add('active');
});
cer12.addEventListener('click',function(){
    over12.classList.remove('active');
    pop12.classList.remove('active');
});
var btabrir13 = document.getElementById('btn-abrir13'),
    over13 = document.getElementById('over13'),
    pop13= document.getElementById('pop13'),
    cer13 = document.getElementById('cer13');

btabrir13.addEventListener('click',function(){
    over13.classList.add('active');
    pop13.classList.add('active');
});
cer13.addEventListener('click',function(){
    over13.classList.remove('active');
    pop13.classList.remove('active');
});

var btabrir14 = document.getElementById('btn-abrir14'),
    over14 = document.getElementById('over14'),
    pop14 = document.getElementById('pop14'),
    cer14 = document.getElementById('cer14');

btabrir14.addEventListener('click',function(){
    over14.classList.add('active');
    pop14.classList.add('active');
});
cer14.addEventListener('click',function(){
    over14.classList.remove('active');
    pop14.classList.remove('active');
});
var btabrir15 = document.getElementById('btn-abrir15'),
    over15 = document.getElementById('over15'),
    pop15= document.getElementById('pop15'),
    cer15 = document.getElementById('cer15');

btabrir15.addEventListener('click',function(){
    over15.classList.add('active');
    pop15.classList.add('active');
});
cer15.addEventListener('click',function(){
    over15.classList.remove('active');
    pop15.classList.remove('active');
});
