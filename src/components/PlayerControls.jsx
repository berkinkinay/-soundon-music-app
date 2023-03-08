import React, { useEffect }from 'react';
//ICONS
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiRepeat } from 'react-icons/fi';
import { RxTrackPrevious, RxTrackNext } from 'react-icons/rx';
import { BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import axios from 'axios';
//UTILS
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from "../utils/Constants";

export default function PlayerControls() {
    const [{ token, playerState}, dispatch] = useStateProvider() 

    const changeState = async () => {
      const state = playerState ? "pause" : "play";
      await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: !playerState,
      });
    };
    const changeTrack = async (type) => {
      await axios.post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
      const response1 = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response1.data !== "") {
        const currentlyPlaying = {
          id: response1.data.item.id,
          name: response1.data.item.name,
          artists: response1.data.item.artists.map((artist) => artist.name),
          image: response1.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
   
    return (
      <div class="flex flex-col w-full h-full items-center justify-center">   
          <div
             class="flex flex-cols-5 h-full gap-5 items-center justify-center text-xl w-fit"
             >
                <div class="flex font-bold text-gray-400 hover:text-white">
                   <BsShuffle />
                </div>
                <div class="text-gray-400 hover:text-white">
                   <RxTrackPrevious onClick={() => changeTrack("previous")} />
                </div>
                <div class="flex flex-cols-1 text-zinc-300 text-4xl hover:text-white">
                      {playerState ?
                        (
                          <BsFillPauseCircleFill onClick={changeState} />
                        ) : (
                          <AiFillPlayCircle onClick={changeState} />
                        )}
                  </div>
                  <div class=" text-gray-300 font-bold hover:text-white">
                        <RxTrackNext onClick={() => changeTrack("next")} />
                  </div>
                  <div class="flex w-fit h-fit font-bold text-gray-400 hover:text-white items-center justify-center">
                        <FiRepeat />
                  </div>
            </div>
        </div>
  )
}

//Player Controls 2:08

/* 
 <div 
          class="grid grid-cols-5 h-full gap-8 items-center justify-center text-xl "
          >
            <div class="flex text-gray-400">
                <BsShuffle />
            </div>
            <div class="">
                <RxTrackPrevious onClick={()=>changeTrack("previous")} />
            </div>
            <div class="flex flex-cols-2 text-white text-4xl">
               { playerState ?
                 (
                  <BsFillPauseCircleFill onClick={changeState}/>
                 ) : ( 
                  <AiFillPlayCircle onClick={changeState} /> 
                 )}
            </div>
            <div class=" text-gray-300">
                <RxTrackNext  onClick={()=>changeTrack("next")} />
            </div>
            <div class="">
                <FiRepeat />
            </div>
        </div>
      <div class="flex cols-3 gap-x-2">
           <div class="flex">
             00:00
           </div>
           <div class="flex">
               <span>{msToMinutesAndSeconds(duration)}</span>
           </div>
           <div class="flex">
                
           </div>
      </div>
*/

/* 
<div class="flex">
    <span>{msToMinutesAndSeconds()}</span>
</div>
*/