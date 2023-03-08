import React,{useState} from 'react'
import copy from "copy-to-clipboard";

const Clipboard = () => {
    const [copyText, setCopyText] = useState('');
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(copyText);
       alert(`You have copied "${copyText}"`);
    }
	
	return (
	<div className='flex flex-col h-fit w-fit text-white'>
   
        <text
            className='flex h-24 w-24 rounded-full h-fit'
            alert="You have copied"
            type="text" 
            value={copyText} 
              onChange={handleCopyText} 
                placeholder='Enter the text you want to copy'
       />        
            hello
        <button onClick={copyToClipboard}>
               Copy to Clipboard
        </button>
     
    </div>	
    )
}

export default Clipboard;

/* <Input1
			type="text"
			value={copyText}
				onChange={handleCopyText}
				placeholder='Enter the text you want to copy' />
	
		<Button onClick={copyToClipboard}>
			Copy to Clipboard
		</Button>
	
		<Input2
			type="text"
			placeholder='Enter the text you have copied' />
		</Container>
	*/