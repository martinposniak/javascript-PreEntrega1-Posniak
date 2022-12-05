// Acá hice un prompt para que, el usuario, ingrese su nombre y darle la bienvenida.

let ingreso= prompt("Ingresá tu nombre:");

if(ingreso ==""){
    alert("No ingresaste nada!");
}else{
    alert("Bienvenido " + ingreso + "!");
}

// Acá hice un prompt para que, el usuario, ingrese su edad.

let edad= parseInt(prompt("Ingresá tu edad:"));

if(edad == ""){
    alert("No ingresaste nada!");
}else{
    console.log(edad);
}

// Acá hice un prompt para que el usuario me indique que marca de raquetas de tenis conoce.

let marcaRaqueta= prompt("Ingresá el nombre de la marca de raquetas que conozcas:");

if(marcaRaqueta == ""){
    alert("No ingresaste nada!");
}else if(marcaRaqueta == "babolat"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "head"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "yonex"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "dunlop"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "wilson"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "prince"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "tecnifibre"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}

// Acá hice un bucle para que el usuario me indique sus 3 jugadores profesionales de tenis preferidos.

for (let index = 1; index <= 3; index++) {
    let nombreJugador= prompt("Mencioná 3 jugadores de tenis profesionales:");
    console.log(nombreJugador);
    if(nombreJugador == ""){
        alert("No ingresaste nada!");
        break;
    }
}


// Acá puse funciones para el calculo del precio con IVA de 3 raquetas de tenis.

function raquetaBabolat(param1, param2){
    console.log(param1 * param2);
}

raquetaBabolat(70000,1.21);


function raquetaHead(param3, param4){
    console.log(param3 * param4);
}

raquetaHead(65000,1.21);


function raquetaYonex(param5, param6){
    console.log(param5 * param6);
}

raquetaYonex(75000,1.21);



