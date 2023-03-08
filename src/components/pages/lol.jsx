//COMPONENTS
import PlayList from '../PlayList';
import SearchBar from '../Navbar';
import MainComp from '../MainComp';
import NavBar from '../Sidebar';
import MusicPlayer from '../CurrentlyPlayed';
//ICONS
import { BsSoundwave } from  'react-icons/bs';



const AppMain = () => {
  return (
    <div 
     className=
     "flex h-screen w-full bg-gray-900 text-white text-xl items-center justify-center"
     > 
      <header className="flex z-10 h-fit top-0 left-0">
        <div 
         className="flex absolute text-purple-400 text-3xl top-0 left-6 py-8 px-16
                    bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-violet-800"
        >
          <text 
           className=
           "flex text-2xl h-1 w-28 rounded-full bg-white"
          > 
           <h1 className="">
              soundon 
           </h1>
          </text>
          <div 
            className="flex absolute left-[160px]"
          >
             <BsSoundwave size='0.6em' color='' className='mt-2 text-purple-600'/>
          </div>
        </div>
        <div 
         className=
         "flex absolute top-7 items-center left-[350px]"
        >
           <SearchBar />
        </div>
      </header>
        <div 
         className=
         "flex absolute right-0 h-screen cursor-default"
        >
           <img src="Background.png" className="hidden" alt=""/>
        </div>
        <div 
         className="flex h-[120px] w-[120px] rounded-full absolute bottom-16 
                    left-[100px] bg-slate-500 blur-xl animate-spin"
        >
           <img className="m" src='Blur.png' alt=""/>
        </div>
        <div className="grid grid-cols-2 gap-5 items-center justify-center">
         <div 
          className=
          'flex flex-col gap-2 z-50 absolute left-0'
          >
            
            <div> <PlayList /> </div>
         </div>
          <div className="flex absolute w-[1600px] bottom-0 bg-black h-screen text-white right-0">
             <MainComp />
          </div>
        </div>
        <div className='flex absolute left-10 top-16'>
             <NavBar />
        </div>
      <footer className='flex z-10 absolute bottom-0 w-full h-fit'>
         <div 
          className='flex w-fit h-fit'
          >
            <MusicPlayer />
         </div>
      </footer>
    </div>
  )
}

export default AppMain;