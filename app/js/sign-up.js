function registry(){
    let username = document.getElementById('username').value; //Se guarda el contenido del input
    let password = document.getElementById('password').value;
    let retyPassword = document.getElementById('retype-password').value;

    if(!username){ //El signo de admiración indica si no existe username
        alert('Debe ingresar un nombre de usuario');
        return;
    }

    validateLength(username, 6, 'El nombre de usuario');

    if(!password){
        alert('Debe ingresar una contraseña');
        return
    }

    validateLength(password, 8, 'La contraseña');

    if(password !== retyPassword){
        alert('Las contraseñas deben coincidir');
        return;
    }

    if(localStorage.getItem(username)){
        alert(`Ya existe este usuario ${username}` );
        return;
    }

    let user = {
        username:username,
        password:password
    }
    console.log(user); //También se puede ({user})

    localStorage.setItem(username, JSON.stringify(user)); //guarda en el localStorage el usuario y la contraseña en forma de string y guarda en el navegador
    
    window.location.href = `home.html?name=${encodeURI(username)}`; //Se usa para que en la URL se vea al final el nombre
    
    sessionStorage.setItem(username, password); //se almacena a nivel de pestaña
}

function validateLength(value, minNumber, field){ //Función que recibe el name o password
    if(value.length < minNumber){
        alert(`${field} debe tener al menos ${minNumber} caracteres`); //bactypes? para que muestr lo que hay en la variable con $
    }
}


//Home
let usernameHome = document.getElementById('username-home');

let name = new URLSearchParams(window.location.search).get('name'); //Coloca el nombre en el perfil tomandolo de la URL
usernameHome.innerText = name?name:'Bienvenido';