//Se realiza un módulo
const game = (function () {

    const maxLife = 20; //Vida máxima

    let name1 = prompt('Ingrese el jugador 1');
    let player1 = {
        name: name1,
        life: maxLife,
        wins: 0
    }

    let name2 = prompt('Ingrese el jugador 2');
    let player2 = {
        name: name2,
        life: maxLife,
        wins: 0
    }

    const randomShoot = function () {
        return Math.floor(Math.random() * 10); //Devuelve un valor entre 0 y 9
    }

    const fightWithDamage = (player, damage, life) => {
        alert(`${player} recibió un ataque de ${damage} puntos. Vida restante: ${life}`);
    }

    //Si recibe solo un parametro se puede omitir el ( ) y si ejecuta solo una línea de código se pueden quitar las { }
    const fatality = player => alert(`Derrotado ${player}`);

    const heal = player => {
        if(player.life === maxLife){
            alert(`${player.name} tiene la vida completa y no puede curarse`);
            return;
        }

        let healing = Math.floor(Math.random() * 5) + 5; // Cura entre 5 y 15 puntos
        player.life = Math.min(maxLife, player.life + healing); //Asegura que no pase de maxLife y suma la curación
        alert(`${player.name} usó una poción y recuperó ${healing} puntos de vida. Vida total: ${player.life}`)
    }

    const resetGame = () => {
        player1.life = 20;
        player2.life = 20;
        alert("¡Nueva partida!");
    }

    const endGame = player => {
        if (player.life <= 0) {
            player.life = 0; //Evita que la vida sea negativa
            let winner;
            if (player === player1) {
                winner = player2;
            } else {
                winner = player1;
            }
            winner.wins++;
            alert(`${winner.name} ha ganado esta partida. Victorias: ${winner.wins}`);
            fatality(player.name);
            resetGame();
        }
    }

    //Si recibe solo un parametro se puede omitir el ( )
    const fight = player => {

        let currentPlayer;
            if (player === player1.name) {
                currentPlayer = player1; //Asigna todo el objeto
            } else {
                currentPlayer = player2;
            }

        alert(`Turno del jugador ${player}. Vida total: ${currentPlayer.life}`);

        let choice = prompt("¿Deseas atacar (A) o curarte (C)?").toUpperCase();

        if (choice === 'C') {
            heal(currentPlayer);
            return; //Termina el turno después de curarse
        } else if (choice === 'A') {
            if (player === player1.name) {
                let damage = randomShoot();
                player2.life = Math.max(0, player2.life - damage); //Asegura que la vida no sea menor a 0
                fightWithDamage(player2.name, damage, player2.life);
                endGame(player2);
            } else if (player === player2.name) {
                let damage = randomShoot();
                player1.life = Math.max(0, player1.life - damage);
                fightWithDamage(player1.name, damage, player1.life);
                endGame(player1);
            }
        } else {
            alert("Opción no válida. Pierdes el turno.");
        }
    }

    return { fight }
})()



