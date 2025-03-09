//Se realiza un módulo
const game = (function () {

    /*let name1 = prompt('Ingrese jugador 1');
    let player1 = {
        name: name1,
        life: 50
    }
    
    let name2 = prompt('Ingrese jugador 2');
    let player2 = {
        name: name2,
        life: 50
    }*/

    let player1 = {
        name: 'Dani',
        life: 50
    }

    let player2 = {
        name: 'Elli',
        life: 50
    }

    //Función sin parametros
    function welcome() {
        alert('Bienvenidos');
    }

    //Función con un parametro
    function welcomeWithName(name) {
        alert(`Bienvenido ${name}`);
    }

    //Función con parametros y en uno se asigna por defecto si es undefined
    function welcomeWithNameAndTitle(name, title = 'Señor/Señora') {
        alert(`Bienvenido ${title} ${name}`);
    }

    //Función que retorna 
    function concatName(firstName, lastName) {
        let firstNameUpper = firstName.toUpperCase();
        let lastNameUpper = lastName.toUpperCase();
        if (lastNameUpper === firstNameUpper) {
            return;
        }
        return firstNameUpper.concat(" ".concat(lastNameUpper));
    }

    const simpleShoot = function () {
        alert('Disparo');
    }

    const shoot = function (damage) {
        alert(`Recibiste daño de ${damage} puntos`);
    }

    const randomShoot = function () {
        return Math.floor(Math.random() * 10); //Devuelve un valor entero
    }

    const startFight = () => {
        alert('Que inicien los juegos');
    }

    const fightWithDamage = (player, damage) => {
        alert(`${player} recibió un ataque de ${damage} puntos`);
    }

    //Si recibe solo un parametro se puede omitir el ( ) y si ejecuta solo una línea de código se pueden quitar las { }
    const fatality = player => alert(`Derrotado ${player}`);

    const endGame = player => {
        if (player.life <= 0) {
            fatality(player.name);
        }
    }

    //Si recibe solo un parametro se puede omitir el ( )
    const fight = player => {
        alert(`Turno del jugador ${player}`);

        if (player === player1.name) {
            let damage = randomShoot();
            player2.life = player2.life - damage;
            fightWithDamage(player2.name, damage);
            endGame(player2);
        } else if (player === player2.name) {
            let damage = randomShoot();
            player1.life = player1.life - damage;
            fightWithDamage(player1.name, damage);
            endGame(player1);
        } else {
            startFight();
        }
    }

    return { fight } 
})()



