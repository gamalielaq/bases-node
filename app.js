
import pkg from 'colors';
const { stripColors } = pkg;
import { argv } from './config/yargs.js';
import { crearArchivo } from './helpers/multiplicar.js';

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
    .then(response => {
        console.log(response.rainbow);
    })
    .catch((error) => console.log('error: ' + error));