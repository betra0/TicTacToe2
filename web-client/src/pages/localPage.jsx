import { Link } from 'react-router-dom';
import GridGame from '../components/gridGame';
import { useState } from 'react';
const turns ={
    x:'X',
    o:'O',
    none:false
    
}

function useLocalPlay(){
    const [turn, setTurn] = useState(turns.x)
    const [oldItems, setOldItems] = useState([])
    const [itemsGrid, setItemsGrid] = useState([
        '','' , '',
        '', '', '',
        '', '' , ''
    ])
    const [deleteItem, setDeleteItem]=useState(null)

    const handlerSquareClick = (index)=>{
        if (itemsGrid[index] !== '' || turn === turns.none) 
            return
        const newGrid = [...itemsGrid]
        newGrid[index] = turn
        const newOldItems = [...oldItems, index]
        console.log(newOldItems.length, 'tamaño xd')
        
        if (newOldItems.length>=6){
            newGrid[newOldItems[0]] = ''
            newOldItems.shift()   
        }
        if (newOldItems.length === 5)
            setDeleteItem(newOldItems[0])
        setOldItems(newOldItems)
        setItemsGrid(newGrid)
        if (turn === turns.x)
            setTurn(turns.o)
        else
            setTurn(turns.x)


        

    }



    return {turn, oldItems, itemsGrid, deleteItem, handlerSquareClick}
}


function LocalPage(){
    const {turn, oldItems, itemsGrid, handlerSquareClick, deleteItem} = useLocalPlay()
    console.log(itemsGrid)

    return(
    <main className="bg-gray-900 w-screen h-screen  flex items-center flex-col text-white">
        <h2 className=" mt-9 mb-12 text-center text-2xl">Tic Tac Toe 2</h2>
        <section className="mt-7 flex flex-1 w-full  flex-col items-center ">
        <GridGame items={itemsGrid} onclick={handlerSquareClick} deleteItem={deleteItem}/>
        
        

            
        </section>
    </main>
    )
}
    

    
export default LocalPage;