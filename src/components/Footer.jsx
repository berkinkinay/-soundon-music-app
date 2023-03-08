import React from "react";
//COMPONENTS
import CurrentlyPlayed from "./CurrentlyPlayed";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";

export default function Footer() {
  return (
    <div class="flex w-full h-full items-center justify-center">
      <div class="flex flex-cols-3 w-full h-full items-center justify-center">
          <div class="flex w-full h-full items-center justify-center">
              <CurrentlyPlayed />
          </div>
          <div class="flex w-full h-full items-center justify-center">
              <PlayerControls />
          </div>
          <div class="flex w-full h-full items-center justify-center">
              <Volume />
          </div>
       </div>
    </div>
  );
};