//ICONS
import { CgProfile } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
//UTILS
import { useStateProvider } from '../utils/StateProvider';

export default function SearchBar() {
  const [{ userInfo }] = useStateProvider();
  return (
    <div
     className="flex w-full h-16 gap-8 items-center justify-center bg-black"
     >
      <div className="flex gap-2 text-base w-fit h-fit text-white">
          <FaSearch size="1.1em" class="mt-1"/> 
          <input 
            className="flex w-56 h-7 rounded-full bg-black indent-5" 
            type="text" 
            placeholder='Search for artists or songs'>
            
          </input>
      </div>  
      <div className="flex absolute right-14 w-36 h-8 m-2 rounded-full bg-gray-900 items-center justify-center">
        <button
          className='flex text-white gap-2 text-base w-fit h-fit items-center justify-center'       
          rel="noreferrer"  
          href="#"
          >
            <CgProfile color='green' /> <span> {userInfo?.name} </span>  
        </button>
      </div>
   </div>
  )
}