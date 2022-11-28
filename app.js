// miniproyecto de piedra, papel o tijera

// primero, saludar al jugador
alert('Inicia el Juego!! Elige un ataque:');
// segundo, el jugador debe elegir una de las 3 opciones
let confirmacion=1;
while (confirmacion!=2) {
    let bandera=false;
    let player=null;
    do{
    player = prompt('Escribe 1 para PIEDRA, 2 para PAPEL, 3 para TIJERA');
    if((player>=1) && (player<=3)){
        bandera=true;
    } else if(bandera=false);
    }while (bandera==false);
    while(bandera==true) {
        if(player == 1) {
            alert('Elegiste PIEDRA');
        } else if(player == 2) {
            alert('Elegiste PAPEL');
        } else if(player == 3) {
            alert('Elegiste TIJERA');
        }

        // tercero, elegir el ataque de la IA (debe ser ALEATORIO)
        let enemy = Math.round(Math.random() * 2);
        if(enemy == 0) {
            alert('La maquina eligió PIEDRA');
        } else if(enemy == 1) {
            alert('La maquina eligió PAPEL');
        } else if(enemy == 2) {
            alert('La maquina eligió TIJERA');
        }

        // cuarto, mostrar el resultado
        if(enemy == (player-1)) {
            alert('Empate! Otra vez!');
        } else if(enemy == 0 && player == 2) {
            alert('GANASTEEEE WOOO!');
        } else if(enemy == 1 && player == 3) {
            alert('GANASTEEEE WOOO!');
        } else if(enemy == 2 && player == 1) {
            alert('GANASTEEEE WOOO!');
        } else {
            alert('PERDISTE :C');
        }
        bandera=false;
    }
    do{
        confirmacion = prompt('¿Volver a Jugar? (1 para continuar o 2 para salir)');
    } while ((confirmacion!=1) && (confirmacion!=2));
}
