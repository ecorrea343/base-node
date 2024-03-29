const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(` Archivo creado: ${archivo}`))
            .catch((err) => console.log(err))
        break;
    default:
        console.log('Comando no reconocido'.bgRed);

}


//let base = 7;
//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];