import { leer } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nuevo Automovil')
    console.log('2.- Mostrar Automovil')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}