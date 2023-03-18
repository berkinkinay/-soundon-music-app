//icons
import { BsSoundwave } from  'react-icons/bs';
//Typewriter
import { Typewriter, Cursor } from 'react-simple-typewriter';
//.env

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
    <div 
      className='flex leading-loose w-full h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]
                 from-black to-black bg-gradient-to-r'
      >
        <div className="flex absolute z-10 h-screen w-full">
                <img src='album.png' alt='background' class="hidden" />
        </div>
        <div 
          className='flex flex-cols-2 w-full h-screen items-center justify-center'
          >
            <div 
              className='flex z-50 flex-col gap-16 w-2/3 h-screen'
              > 
                <header 
                  className='flex flex-col gap-5 h-fit w-full mt-20 items-center justify-center'
                  >
                  <text className='flex text-lg font-extrabold bg-clip-text text-transparent
                                  bg-gradient-to-r from-slate-100 to-zinc-800'>
                       Hello <span class='text-white'>👋</span> welcome to sound dimension!
                  </text>
                  <div 
                    className='flex h-12 w-36 items-center mt-12 bg-black
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
                <div 
                  className='flex z-10 text-sm flex-col h-fit w-full item-center justify-center gap-20 items-center'
                >
                    <h1 className='flex w-80 h-fit font-semibold text-zinc-400 '>
                      This is a music web application for my Spotify library. 
                      It only shows what I listened recently and my music lists to the other users.            
                    </h1>
                    <div className='flex flex-col w-fit h-fit'>
                      <div className='flex h-fit w-fit'> 
                        <button 
                          onClick={() => handleClick ()} 
                          className="flex"
                          >
                            <h2 class="button">Login with Berkin's Spotify acc
                              <h3 class='text-zinc-700'> This is desktop view </h3>
                            </h2>
                        </button>
                      </div>  
                    </div>
                    <div 
                      className='flex flex-col w-full h-full font-semibold text-zinc-400 
                                 items-center justify-center'
                    >
                       <text className='flex fit h-fit text-left'>
                             All source codes related to this project can be found on 
                             <a
                              className="font-bold hover:text-white ml-1 mr-1 text-purple-400 after:content-[''] ..."
                              rel="noreferrer"  
                              href="https://github.com/berkinkinay" target="_blank"
                            >
                              Developer's
                              </a> github account or
                            </text>
                            <text className='flex fit h-fit'>
                              You can click here
                              <a
                                className="font-bold hover:text-white ml-1 mr-1 text-purple-400 after:content-[''] ..."
                                rel="noreferrer"  
                                href="https://berkinkinay.dev/" target="_blank"
                              >
                                Berkin Kınay 
                              </a> 
                                to learn more.
                            </text>
                      </div>               
                  </div>
              </div>
            <div 
              className='flex flex-col items-center justify-center w-full h-screen 
                         bg-gradient-to-t from-pink-300 via-gray-100 to-purple-900'
              >
                <h1 className='flex flex-col gap-10 text-white items-center justify-center'>
                  <div
                     class="flex w-fit h-fit leading-loose bg-clip-text
                             text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    <text class='font'>
                      This is what I hear 
                    </text>
                  </div>
                  <div class='flex flex-col w-[470px] h-fit bg-black rounded-2xl items-center'>
                    <text className='flex text-3xl'>
                        You can play and review Berkin's
                    </text>
                    <span className='flex text-xl text-pink-400'>
                        <Typewriter
                          words= {['recently played songs', 'spotify profile', 'music lists', 'followed and liked artists', 'liked songs', 'follows and followers',]}
                          loop= {10}
                          typeSpeed= {74}
                          deleteSpeed= {20}
                        />
                          <span className='flex text-xl text-purple-600 '>
                              <Cursor cursorStyle='>' cursorBlinking />
                          </span>
                    </span>
                  </div>
                </h1>
            </div>
        </div>
    </div>
  );
}
