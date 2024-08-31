import { Link } from 'react-router-dom';
import GridGame from '../components/gridGame';
import { useEffect, useState } from 'react';
import { turns } from '../models/turns';
import logicWinner from '../utils/logicWinner';



function useLocalPlay(){
    const [turn, setTurn] = useState(turns.x)
    const [oldItems, setOldItems] = useState([])
    const [itemsGrid, setItemsGrid] = useState([
        '','' , '',
        '', '', '',
        '', '' , ''
    ])
    const [winner, setWiner]= useState(null)
    const [deleteItem, setDeleteItem]=useState(null)

    const handlerSquareClick = (index)=>{
        if (itemsGrid[index] !== '' || turn === turns.none) {
            return
        }


        const newGrid = [...itemsGrid]
        newGrid[index] = turn
        const newOldItems = [...oldItems, index]
        
        if (newOldItems.length>=7){
            newGrid[newOldItems[0]] = ''
            newOldItems.shift()   
        }
        if (newOldItems.length === 6)
            setDeleteItem(newOldItems[0])
        setOldItems(newOldItems)
        setItemsGrid(newGrid)
        if (turn === turns.x)
            setTurn(turns.o)
        else
            setTurn(turns.x)
    }
    useEffect(() => {
        console.log('este es turn', turn)
        if (itemsGrid.length >=5){
            const newWinner = logicWinner({itemsGrid:itemsGrid})
            if(newWinner!==null){
                setWiner(newWinner)
                setTurn(turns.none)
            }
                

        }

        return () => {
          
        };
      }, [itemsGrid]);
    
    const resetGame = (e)=>{
        setTurn(turns.x)
        setItemsGrid([
            '','' , '',
            '', '', '',
            '', '' , ''
        ])
        setOldItems([])
        setWiner(null)
        setDeleteItem(null)
    }



    return {turn, oldItems, itemsGrid, deleteItem, winner ,handlerSquareClick, resetGame}
}


function LocalPage(){
    const {turn, oldItems, itemsGrid, handlerSquareClick, deleteItem, winner, resetGame} = useLocalPlay()

    return(
    <main className="bg-gray-900 w-screen min-h-screen  flex items-center flex-col text-white">
        <h2 className=" mt-9 mb-12 text-center text-3xl">Tic Tac Toe 2</h2>
        <section className="mt-7 flex flex-1 w-full  flex-col items-center ">
        <GridGame winner={winner} items={itemsGrid} onclick={handlerSquareClick} deleteItem={deleteItem}/>

        <section 
        className=' text-2xl border-t-4 border-b-4 border-gray-600 border-dashed w-full max-w-xs mt-5 py-5 flex justify-around' 
        > 
            <span className='flex items-center justify-center'>Turn :</span>
            <div className='flex text-center gap-2'> 
                <div className={` w-12 h-12 border border-gray-800 rounded flex items-center justify-center ${turn == turns.x?'bg-gray-700':'' } `} >X</div> 
                <div className={` w-12 h-12 border border-gray-800 rounded flex items-center justify-center ${turn == turns.o?'bg-gray-700':''  } `} >O</div> 
            </div>
        </section>
        <button 
        type='button'
        onClick={resetGame}
        className='mt-5 py-3 bg-gray-900 transform active:scale-90 hover:scale-110 hover:bg-gray-700 transition-transform transition-bg w-full max-w-xxxs border border-gray-400 rounded-md flex items-center justify-center '
        >Reset</button>
        
        

            
        </section>
    </main>
    )
}
    

    
export default LocalPage;