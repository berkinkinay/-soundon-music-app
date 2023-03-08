
export default function Login() {
  const handleClick = async () => {
    const client_id = "88f9d148f03840d18ae41a1cd1d37a9a";
    const redirect_uri = "http://localhost:3000/soundon";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="flex flex-col bg-black h-screen w-full text-white items-center justify-center">
      <img 
        className="h-fit w-fit"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button
        className="flex text-white"
        onClick={handleClick}>Connect Spotify
        </button>
    </div>
  );
}
