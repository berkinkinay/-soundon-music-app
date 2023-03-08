import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
//COMPONENTS
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainBody from './MainBody';
//UTILS
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

export default function Soundon() {
  const [{ token }, dispatch] = useStateProvider();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  
    useEffect(() => {
      const getUserInfo = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
     const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);
  return (
    <> 
      <div 
        className="flex flex-cols-1 w-full h-screen text-white text-xl  
                   bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black resize-x"
        >
          <div className="flex w-fit h-screen bg-black border-r border-zinc-800 justify-center resize-x">
              <Sidebar /> 
          </div>
          <div  className='flex w-full h-screen' ref={bodyRef} onScroll={bodyScrolled}>
              <MainBody />
          </div>
          <div className='flex absolute left-0 bottom-0 w-full h-24 items-center justify-center border-t border-gray-800
                          bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 to-black'
            >  
               <Footer />
          </div>
      </div>
    </>
  )
}
//1:28:00 da kaldım buradan devam

/*
1- Footer hidden kalsın öyle devam 
2- resize CSS index den matching den devam (resize.js mouse follow olacak "https://www.youtube.com/watch?v=yKRLSfaJOWI") --
3- Page transition yazılacak
4- AppLogo yeniden Sidebar a dahil edilecek ++
5- Body içerisindeki Header section scrool down move transition olacak.
*/