const argv = require('yargs').argv

let cont = 0;


while (cont <= 10){

    console.log(argv.numero + " * " +  cont + " = " + (cont * argv.numero)  );

    cont ++;

}