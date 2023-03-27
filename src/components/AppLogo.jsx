//component
import SearchBar from "./Navbar"
//icon
import { BsSoundwave } from  'react-icons/bs';

const AppLogo = () => {
    return (
    <header className="flex flex-col w-fit h-fit items-left py-10 px-14"> 
        <div 
          className='flex h-fit w-fit bg-clip-text from-slate-100 to-purple-900 items-center
                     justify-center rounded-2xl backdrop-blur-3xl drop-shadow-3xl'
          >
            <h1 
             className='flex flex-col-2 h-fit w-fit bg-clip-text text-transparent
                        bg-gradient-to-r from-slate-100 to-purple-900 text-2xl'
             >
               soundon   <BsSoundwave size='0.8em' color='' className='mt-2 text-slate-100'/>
            </h1>
        </div>
    </header>
  )
}

export default AppLogo;
