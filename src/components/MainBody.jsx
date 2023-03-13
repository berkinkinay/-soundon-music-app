import axios from "axios";
import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../utils/Constants";
import Navbar from './Navbar';

export default function   Body({ headerBackground }) {
  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id, 
        name: response.data.name,
        description: response.data.description.startsWith("<a")
        ? ""
        : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist)=>artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
     dispatch({type:reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist(); 
  }, [token, dispatch, selectedPlaylistId]);

  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
 
  const playTrack = async (
      id,
      name, 
      artists, 
      image, 
      context_uri, 
      track_number
      ) => {
       const response = await axios.put(
          `https://api.spotify.com/v1/me/player/play`,
          {
            context_uri,
            offset: {
              position :track_number-1
            },
            position_ms: 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status === 204) {
          const currentlyPlaying = {
            id,
            name, 
            artists,
            image,
          }
          dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
          dispatch({ type: reducerCases.SET_STATE, playerState: true });
        }
           else  dispatch ({ type: reducerCases.SET_STATE, playerState: true }); 
      };
  return (
    <div class="flex flex-col items-center h-screen bg-zinc-900 w-full">
      <div class="flex object-top w-full h-20 bg-black">
           <Navbar />
       </div>
         {selectedPlaylist && (
         <>
            <div class="flex flex-col gap-1 w-full h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
                       from-gray-900 via-black to-gray-900 overflow-auto"
                  >
                    <div class="flex flex-col m-4 items-center justify-center">
                        <div class="flex h-[180px] w-[180px]">
                            <img 
                              class="rounded-full drop-shadow-xl" 
                              src={selectedPlaylist.image} 
                              alt="selectedplaylist"
                              />
                        </div>
                          <h1 class="text-xl text-white"> {selectedPlaylist.name} </h1>
                          <p class="text-xs text-gray-300"> {selectedPlaylist.description} </p>
                          <text class="text-xs text-gray-200"> Berkin's public playlist </text>
                    </div>
              <div class="flex flex-col w-full h-screen"
                  >
                    <div class="flex w-full h-fit items-center bg-zinc-900">
                      <div class="grid grid-cols-3 items-center w-full indent-2 text-base">
                        <div className="flex h-fit w-fit">
                            <span>TITLE</span>
                        </div>
                        <div className="flex h-fit w-fit">
                            <span>ALBUM</span>
                        </div>
                        <div className="flex h-fit w-fit ml-1">
                          <span><AiFillClockCircle /></span>
                        </div>
                      </div> 
                    </div>

                  <div className="flex flex-col w-full h-screen">
                    {selectedPlaylist.tracks.map(
                  (
                    {
                      id,
                      name,
                      artists,
                      image,
                      duration,
                      album,
                      context_uri,
                      track_number,
                    },
                    index
                    ) => {
                    return (
                          <div 
                            key={id} onClick={()=>playTrack(id, name, artists, image, context_uri, track_number)}
                            class="flex flex-col items-left indent-2 w-[full] gap-10 m-1"
                            >
                              <div 
                              class="grid grid-cols-3 w-full h-16 items-left hover:bg-zinc-900 hover:delay-50 rounded-lg"
                              >
                                  <div class="flex h-full w-fit gap-5 items-center">
                                      <span class="flex text-xs w-3 h-fit">{index + 1}</span>
                                      <img class="w-12 h-12"src={image} alt=""/>
                                      <div class="flex flex-col w-fit h-fit">
                                        <span class="text-gray-200 font-semibold text-sm w-fit h-fit">{name}</span>
                                        <span class="text-gray-400 font-normal text-xs w-fit h-fit">{artists}</span>
                                      </div>
                                  </div>
                                  <div class="flex w-fit h-full items-center">
                                    <span class="w-fit h-fit text-sm text-gray-200"> {album} </span>
                                  </div>
                                  <div class="flex items-center text-sm">
                                    <span>{msToMinutesAndSeconds(duration)}</span>
                                  </div>
                              </div>
                          </div>
                        );
                      }
                    )}
                  </div>
              </div> 
            </div>
         </>
        )} 
    </div>
  );
}
