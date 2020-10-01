
import { leer } from '../view/entradaTeclado'
import {menuPral} from '../view/menuPral'




const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opcion 1")
                break
            case 2:
                console.log("Estoy en opcion 2")
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()

