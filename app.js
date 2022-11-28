// miniproyecto de piedra, papel o tijera

// primero, saludar al jugador
alert('Inicia el Juego!! Elige un ataque:');
// segundo, el jugador debe elegir una de las 3 opciones
let confirmacion=1;
while (confirmacion!=2) {
    let player=0;
    do{
        player = prompt('Escribe 0 para PIEDRA, 1 para PAPEL, 2 para TIJERA');
    }while ((player!=0) && (player!=1) && (player!=2)) 
    while((player==0) && (player==1) && (player==2)) {
        alert('aca estoy3');
        if(player == 0) {
            alert('Elegiste PIEDRA');
        } else if(player == 1) {
            alert('Elegiste PAPEL');
        } else if(player == 2) {
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
        if(enemy == player) {
            alert('Empate! Otra vez!');
        } else if(enemy == 0 && player == 1) {
            alert('GANASTEEEE WOOO!');
        } else if(enemy == 1 && player == 2) {
            alert('GANASTEEEE WOOO!');
        } else if(enemy == 2 && player == 0) {
            alert('GANASTEEEE WOOO!');
        } else {
            alert('PERDISTE :C');
        }
        player=3;
    }
    do{
        confirmacion = prompt('¿Volver a Jugar? (1 para continuar o 2 para salir)');
    } while ((confirmacion!=1) && (confirmacion!=2));
}