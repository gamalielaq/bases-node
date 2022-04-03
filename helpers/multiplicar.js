import { writeFileSync } from 'fs';
import colors from 'colors';
const { stripColors } = colors;

//Realizar la tabla del 5
export const crearArchivo = async (base = 5, listar, hasta = 12) => {
    try {
        console.clear();
        let salida = `-TABLA DEL ${base}---\n\n`, consola = '';

        const multiplicando = base;
        if (base) {
            for (let index = 1; index <= hasta; index++) {
                salida += `${multiplicando} ${'x'} ${index} ${'='} ${multiplicando * index}\n`;
                consola  += `${multiplicando} ${'x'.yellow} ${index} ${'='.red} ${multiplicando * index}\n`;
            }
            if (listar) {
                console.log('==============================='.green);
                console.log('----TABLA DEL'.green, ` ${colors.blue(base)}-----`);
                console.log('==============================='.green);
                console.log(consola);
            }
            writeFileSync(`./salida/tabla-${multiplicando}.txt`, salida);
            return `tabla-${multiplicando}.txt created`;
        } else {
            throw 'No existe el multiplicando';
        }
    } catch (error) {
        throw error;
    }
}
