function GridGame({items=[], onclick=()=>{}, deleteItem=null, winner=null}){
    
    if(items==[]){
        items=[
            'X','O' , '',
            '', 'X', '',
            '', 'O' , 'X'
        ]
    }
    
    const handleSquareClick = (index) => {
        console.log('Clicked button at index:', index);
        onclick(index)

    };



    return(
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs text-center text-4xl">
            {items.map((item, index) => (
        <button
          key={index}
          data-index={index} // Añade un atributo de datos para identificar el botón
          onClick={() => handleSquareClick(index)}
          className={`border-4 border-gray-800 rounded w-full aspect-square flex items-center justify-center transition-bg duration-300 hover:bg-gray-700 ${deleteItem==index&& !winner ? 'bg-gray-800 text-red-500' : ''}`}
        >
          {item}
        </button>
      ))}
        </div>
    )
}

export default GridGame;