const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`)
            console.log(hola);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`.bgRed)
        });
    })
}

let listarTabla = (base, limite = 10) => {


    console.log('=========================');
    console.log(`Tabla de ${ base }`.random);
    console.log('=========================');

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);

    }

}

module.exports = {
    crearArchivo,
    listarTabla

}