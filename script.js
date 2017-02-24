var vectorImagenes=new Array(13);
var valor1=0;
var valor2=0;
var turno=0;
var contador=0;
var fallos=0;

function cargaAleatoria(){

  var i=0;
  for (i=0; i < 7; i++){
    vectorImagenes[i]=i+".png";
    //Se cargan las 6 imagenes
  }

  var doble=1;
  for (i = 7; i < 13; i++) {
    vectorImagenes[i]=doble+".png";
    doble++;
    //duplica las imagenes
  }

  var aux="";
  for (i = 1; i < 13; i++) {
    var aleatorio = Math.round(Math.random()*10)+1;
    //pone las imagenes aleatorimente
    aux = vectorImagenes[i];
    vectorImagenes[i]=vectorImagenes[aleatorio];
    vectorImagenes[aleatorio]=aux;
  }

  for (i = 1; i < 13; i++) {
    document.getElementById(i).src="imagenes/"+vectorImagenes[i];
    // cargamos y mostramos imagenes aleatoriamente
  }
}

function limpiar (){

  for(i = 1; i < 13; i++) {
    document.getElementById(i).src="imagenes/0.jpg";
    //limpiamos contador de puntos y errores
    contador = 0;
    document.getElementById("puntos").value= contador;

    fallos = 0;
    document.getElementById("fallos").value= fallos;
  }
  //limpiamos la pantalla aplicamos la imagen del interrogante
}

function evento(valor){
  if (turno==0) {
    valor1=valor;
    turno=1;
    document.getElementById(valor1).src="imagenes/"+vectorImagenes[valor1];
    //asignamos valor a valor1 y asi buscamos y mostramos la imagen que este asignada
  }else{
    valor2=valor;
    turno=0;
    document.getElementById(valor2).src="imagenes/"+vectorImagenes[valor2];
    //asignamos valor a valor2 y asi buscamos y mostramos la imagen que este asignada


    if(vectorImagenes[valor1]==vectorImagenes[valor2]){

      //comprobamos parejas y contamos los puntos para ganar
        contador++;
        document.getElementById("puntos").value= contador;

        //if(contador==2){
        //  var finForzado=function(){
        //    limpiar();
        //  };
        //  setTimeout(finForzado, 1000);
        //  }

          if (contador==6) {
           var gana=function(){
              alert("As Ganado !!!!!");
            };
           setTimeout(gana, 300);
          }

    }else{
      //Las targetas son distintas cargamos imagen interrogante y contamos fallos
      fallos++;
      document.getElementById("fallos").value= fallos;

      var distinto = function(){
        document.getElementById(valor1).src="imagenes/0.jpg";
        document.getElementById(valor2).src="imagenes/0.jpg";
        alert("Diferente!");
      };
      setTimeout(distinto, 100);
    }
  }

}
