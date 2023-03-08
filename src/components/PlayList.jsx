import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

const Playlist = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
    <div 
      className="flex flex-col h-fit w-full items-center justify-center indent-2 mt-12 border-b border-zinc-900"
      >
        <ul
          className="flex flex-col w-full h-fit text-sm gap-2 indent-3"
          >
            {playlists.map(({ name, id }) => {
              return  <li 
                        class="flex text-gray-400 font-semibold cursor-default hover:text-white"
                        key={id} 
                        onClick={() => changeCurrentPlaylist(id)}
                        >
                        {name}
                      </li>
              })}
      </ul>
    </div>
  );
}
export default Playlist; 