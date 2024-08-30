import { Link } from 'react-router-dom';
function MenuPage(){




    return(
    <main className="bg-gray-900 w-screen h-screen  flex items-center flex-col text-white">
        <h2 className=" mt-9 mb-12 text-center  text-5xl">Tic Tac Toe 2</h2>
        <section className="mt-7 flex flex-1 w-full max-w-xxs flex-col text-center gap-7">
        <Link className="bg-gray-800 w-full rounded-lg py-1 text-xl hover:bg-gray-700 transform hover:scale-110 duration-200 transition-transform active:scale-90" to="/local">Local</Link>
        <Link className="bg-gray-800 w-full rounded-lg py-1 text-xl hover:bg-gray-700 transform hover:scale-110 duration-200 transition-transform active:scale-90" to="/">Multiplayer</Link>
        <Link className="bg-gray-800 w-full rounded-lg py-1 text-xl hover:bg-gray-700 transform hover:scale-110 duration-200 transition-transform active:scale-90" to="/">Settings</Link>
        <Link className="bg-gray-800 w-full rounded-lg py-1 text-xl hover:bg-gray-700 transform hover:scale-110 duration-200 transition-transform active:scale-90" to="/">About</Link>

            
        </section>
    </main>
    )
}
    

    
export default MenuPage;