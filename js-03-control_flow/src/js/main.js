const feeling = (isHappy = false) => {
    let myImage = document.getElementById("img-el");
    if (isHappy === true){
        myImage.src = "/public/images/dino.jpg";  
    } else {
        myImage.src = "/public/images/dinoemo.png";
    }
    
}
feeling();

let isActive = true;

if (isActive === true) console.log("El usuario está activo")

if (isActive) {
    console.log("El usuario está activo")
}

{
    let firstName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;

    //console.log(`${firstName} ${lastName} ${alias}`)
    {
        let firstName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        //console.log(`${firstName} ${lastName} ${alias} ${age}`)
    }
    //console.log(`${firstName} ${lastName} ${alias} ${age}`)
}
//console.log(`${firstName} ${lastName} ${alias} ${age}`)
console.log(alias);

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".

 Imprimir el valor del retorno por consola.
*/

const number = temperature => {
   if (temperature > 25){
    return `Hace calor`;
   }
   else{
    return `Hace frio`;
   }
}
console.log(number(26));


/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/

const tempFunction = weatherCode => {
    if (weatherCode === 0){
        return `Clear sky`;
    }
    else if (weatherCode >= 1 && weatherCode <= 3){
        return `Mainly clear, partly cloudy, and overcast`;
    }
    else if (weatherCode === 45 || weatherCode === 48){
        return `Fog and depositing rime fog`;
    }
    else{
        return `Enter a valid code`;
    }
}

console.log(tempFunction(0))


const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("super_admin") ); // Acceso para editar contenido


const getAccessLevelWithEarlyReturn = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":
        case "admin":
            return "Acceso completo al sistema";
            
        case "editor":
            return "Acceso para editar contenido";
            
        case "viewer":
            return "Acceso solo para ver contenido";
            
        default:
            return "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevelWithEarlyReturn("super_admin") ); // Acceso para editar contenido

//Refactorizar la función getWeather usando switch-case
const getWeather=(codigo)=>{
     let message;
    switch (codigo){
        case 0:
            return "Clear Sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48:
            return "Fog and depositing rime fog";
        default:
            return "no definido"
    }
}
console.log( getWeather(1) );


/*
 Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const numberFunction = number => {
    return number % 2 === 0 ? "Par" : "Impar";
}
console.log(numberFunction(7));