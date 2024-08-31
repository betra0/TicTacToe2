import { jugadas3x3, turns } from "../models/turns";

export default function logicWinner({itemsGrid}){
    const jugadasX = []
    const jugadasO = []
    let winner = null
    itemsGrid.forEach((item, indice) => {
        if(item== turns.x)
            jugadasX.push(indice)
        else if(item == turns.o)
            jugadasO.push(indice)
        
    });
    // añadir en un fututo ina condiconal para distingirr si es un tablero de 3X3 O OTRO 
    for (const jugadas of jugadas3x3){
        if (jugadas.every(e => jugadasX.includes(e))){
            winner = turns.x
            break
        }
        if (jugadas.every(e => jugadasO.includes(e))){
            winner = turns.o
            break
        }
    }

    return winner

}