import Playlist from './PlayList'
import { BsSpotify, BsFillPlayFill, BsListUl  } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import * as React from "react";
import { NavLink } from 'react-router-dom';
import AppLogo from './AppLogo';

export default function Sidebar () {
  return (
    <div className="flex flex-col gap-10 h-fit w-fit items-center justify-center cursor-default">
        <div className="flex w-fit h-48 items-center justify-center mt-20">
            <div className="grid grid-col-2 gap-4 h-fit w-fit text-sm 
                            font-semibold text-gray-3 rounded-b border-b border-gray-800 pb-2"
                >
                    <header className='flex h-fit w-fit items-center'>
                        <AppLogo />
                    </header>
                    <a 
                        className="flex flex-col-2 hover:text-green-400 transition-all delay-50 items-left indent-12"
                        rel="noreferrer"  
                        href="userprofile" 
                    >
                    Berkin's profile <BsSpotify size="" className='ml-2 mt-1' />
                    </a>
                    <a 
                        className="flex flex-col-2 hover:text-slate-400 transition-all delay-50 items-left indent-12"
                        rel="noreferrer"  
                        href="/hello" 
                        >
                            Music lists <BsListUl size="" className='ml-2 mt-1' />  
                    </a>
                    <a 
                        className="flex flex-col-2 hover:text-red-400 transition-all delay-50 items-left indent-12"
                        rel="noreferrer"  
                        href="/hello" 
                        >
                            Liked songs <FcLike size="" className='ml-2 mt-1' />  
                    </a>
                    <a 
                        className="flex flex-col-2 hover:text-slate-400 transition-all delay-50 items-left indent-12"
                        rel="noreferrer"  
                        href="/hello" 
                        >
                            Recently played <BsFillPlayFill color="cyan" className='ml-2 mt-1' />  
                    </a>
            </div>
        </div>
        <div className="flex h-96 w-full">
            <Playlist />
        </div>
    </div>
  )
}
