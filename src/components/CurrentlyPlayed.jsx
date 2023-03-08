import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

export default function MCurrentTrack () {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const { item } = response.data;
        const currentPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      }
    }; 
    getCurrentTrack();
  }, [token, dispatch]);
  return (

      <div 
        className='flex flex-col h-full text-white text-base w-full items-left justify-center'
        >
          {
            currentlyPlaying  && 
            <div class="flex flex-cols-2 gap-5 w-full object-left ml-14">
                <div className="flex h-14 w-14">
                    <img src={currentlyPlaying.image} alt="currentlyplaying" /> 
                </div>
                <div className="flex flex-col h-full w-fit items-left justify-center">
                  <h4 class="text-gray-100 text-sm font-semibold">{currentlyPlaying.name}</h4>
                  <h6 class="text-gray-400 text-xs">{currentlyPlaying.artists.join(", ")}</h6>
                </div>
            </div>
          }
      </div>
    )
  };

  /* 
        <div 
        className='grid grid-cols-3 gap-96 text-white text-base w-full '
        >
          <div className='flex items-center justify-center'>left</div>
          <div className='flex items-center justify-center'>mid</div>
          <div className='flex items-center justify-center'>right</div>
      </div>
  */