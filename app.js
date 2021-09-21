$(document).ready(function () {
    function fgenerar () {
        var tabla = "";
        var contadorId = 1;
            for (i = 1; i <= 3; i++) {
            tabla += "<tr>";                                        
            for (j = 1; j <= 10; j++) {
                tabla += `<td id=casilla${contadorId}>`;
                contadorId++;
                tabla += "</td>";
            }                   
            tabla += "</tr>";
        }
        $("#tabla").html(tabla);
    }
    fborrar = function () {
        $("#tabla").empty();
    }
    $("#btnGenerar").click(fgenerar);

    var jugador1 = 1;
    var jugador2 = 1;

    function dado() {  
    var aleatorio=Math.floor((Math.random() * (6-1+1)) + 1);
    return aleatorio
   } 

   function moverJugador1() {
    let numero = dado();
    let viejaPos = document.getElementById(`casilla${jugador1}`);
    viejaPos.style.backgroundColor = '#c3e6cb'
    jugador1 += numero
    if(jugador1>=30){
        alert("Has ganado crack")
    }else{
        let nuevaPos = document.getElementById(`casilla${jugador1}`);
        nuevaPos.style.backgroundColor = 'blue'
        comprobarCasilla(jugador1,jugador2,nuevaPos)
    }

   }

   function moverJugador2() {
    let numero = dado();
    let viejaPos = document.getElementById(`casilla${jugador2}`);
    viejaPos.style.backgroundColor = '#c3e6cb'
    jugador2 += numero
    if(jugador2>=30){
        alert("Has ganado crack")
        location.reload()
    }else{
        let  nuevaPos = document.getElementById(`casilla${jugador2}`);
        nuevaPos.style.backgroundColor = 'red'
        comprobarCasilla(jugador1,jugador2,nuevaPos)
    }

   }

function comprobarCasilla(jugador1,jugador2, nuevaPos){
    if(jugador1===jugador2){
        nuevaPos.style.backgroundColor = 'purple';  
    }
}

   var dado1 = document.getElementById("dado1");
   dado1.addEventListener('click', moverJugador1)

   var dado2 = document.getElementById("dado2");
   dado2.addEventListener('click', moverJugador2)



});