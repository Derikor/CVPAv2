
const artyom = new Artyom();

function ent(e){
    var m = $('#leer')
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13)  artyom.simulateInstruction(m.val());
    if (tecla==13) $('#sub').click();
}
// Add a single command
/*var comandoHola = {
    indexes:["Hola","buenos días","holita"], // Decir alguna de estas palabras activara el comando
    action:function(){ // Acción a ejecutar cuando alguna palabra de los indices es reconocida
        artyom.say("Hola! como estás hoy?");
    }
};

artyom.addCommands(comandoHola); // Agregar comando
*/
// Or add multiple commands at time
var myGroup = [
    {
        description:"Si mi base de datos contiene alguno del nombre dicho, hacer algo",
        smart:true, // Activar comando como un comando smart para poder usar comodines
        indexes:["Sabes quién es *","No sé quién  *","Es * una buena persona"],
        // Ejecutar acción
        // i continene el indice que coincide con lo dicho en el array
        action:function(i,wildcard){
            var database = ["Carlos","Bruce","David","Joseph","Kenny"];

            //Si lo dicho, coincide con la tercera propiedad de los indices
            //es decir, "Es xxx una buena persona", haga X, de lo contrario Y
            if(i == 2){
                if(database.indexOf(wildcard.trim())){
                    artyom.say("Soy una máquina, nisiquiera se que es un sentimiento.");
                }else{
                    artyom.say("No se quien es " + wildcard + " y no se como demonios podría decir si es una buena persona o no.");
                }
            }else{
                if(database.indexOf(wildcard.trim())){
                    artyom.say("Por supuesto que se quien es "+ wildcard + ". Una muy buena persona a mi parecer.");
                }else{
                    artyom.say("Mi base de datos no es lo suficientemente amplia, no se quien es " + wildcard);
                }
            }
        }
    },
    {
        indexes:["Que hora es","Es muy tarde"],
        action:function(i){
            if(i == 0){
                UnaFuncionQueDiceElTiempo(new Date());
            }else if(i == 1){
                artyom.say("Nunca es tarde para hacer algo mi amigo!");
            }
        }
    }
];

artyom.addCommands(myGroup); 


      $("#uno").mouseover(function () {
        artyom.say("enlace 1");
      });
      $("#uno").mouseout(function () {
        artyom.shutUp();
      });
      $("#dos").mouseover(function () {
        artyom.say("enlace 2");
      });
      $("#tres").mouseover(function () {
        artyom.say("enlace 3");
      });
      $("#cuatro").mouseover(function () {
        artyom.say("enlace 4");
      });
      function start() {
        artyom.fatality(); // Detener cualquier instancia previa

        setTimeout(function () {
          // Esperar 250ms para inicializar
          artyom
            .initialize({
              lang: "es-ES", // Más lenguajes son soportados, lee la documentación
              continuous: true, // Reconoce 1 solo comando y basta de escuchar
              listen: true, // Iniciar !
              executionKeyword: "y hazlo ya",
              executionKeyword: "rapido",
              debug: true, // Muestra un informe en la consola
              speed: 1, // Habla normalmente
            })
            .then(function () {
              console.log("comenzando a escuchar");
            });
        }, 250);
      }
      // Luego pausar reconocimiento de comandos
      artyom.dontObey();

      // Intenta ejecutar el comando decir hola ! y nada pasara,
      // pero en 10 segundos, el reconocimiento de comandos será reanudado
      setTimeout(function () {
        artyom.obey();
        // di decir hola y el comando será activado !
      }, 10000);

      function stop() {
        artyom.fatality();
      }

      $("#btnleer").click(function (e) {
        e.preventDefault();
        var btn = $("#btnleer");
        if (artyom.speechSupported()) {
          btn.addClass("disabled");
          btn.attr("disabled", "disabled");

          var text = $("#leer").val();
          if (text) {
            var lines = $("#leer")
              .val()
              .split("\n")
              .filter(function (e) {
                return e;
              });
            var totalLines = lines.length - 1;

            for (var c = 0; c < lines.length; c++) {
              var line = lines[c];
              if (totalLines == c) {
                artyom.say(line, {
                  onEnd: function () {
                    btn.removeAttr("disabled");
                    btn.removeClass("disabled");
                  },
                });
              } else {
                artyom.say(line);
              }
            }
          }
        } else {
          alert("Tu Navegador no puede hablar");
        }
      });