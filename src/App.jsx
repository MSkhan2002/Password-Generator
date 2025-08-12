import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
    const [copiedText, setCopiedText] = useState('');

  // Function to generate password
  const generatePassword = useCallback( () => {
    setCopiedText('Copied to clipboard');
    let pass = "";
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) str += '0123456789';
    if (includeSymbols) str += '!@#$%^&*()_+[]{}|;:,.<>?';

for (let i = 1; i <=length; i++) {
  let char = str.charAt(Math.floor(Math.random() * str.length + 1));
  pass += char;
  
}
setPassword(pass);

  },[length,includeNumbers,includeSymbols,setPassword ]);
  useEffect(() => { generatePassword()}, [length, includeNumbers, includeSymbols,generatePassword]);
  const passwordref = useRef()
  const copypassword = useCallback(() => {
    passwordref.current.select();
    window.navigator.clipboard.writeText(password)
    setCopiedText(password);
  },[password])
  return (
    <>
    <style>
      { `
      body {
        background-color: white;
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }`}
    </style>
    <h1 className='text-black    flex justify-center'>Password Generator </h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-red-500'> <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
       type="text"
       className='outline-none rounded-2xl bg-amber-50 w-full px-4 mt-1 py-0.5  text-black'
       value={password}
        readOnly
        placeholder='Generated Password'
        ref={passwordref}
       />
       <button  
       className='outline-none gap-2 bg-amber-300 text-black mt-1 ml-3 px-4 py-0.5 rounded-lg'
       onClick={copypassword}
       > copy </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div  className='flex items-center gap-x-1'>
          <input type="range" min={4} max={20} value={length} onChange={(e) => setLength(e.target.value)} className='w-full' />
          <span className='text-white'>Length: {length}</span>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          <span className='text-white'>Include Numbers</span>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          <span className='text-white'>Include Symbols</span>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <button 
          className='bg-amber-500 text-black px-4 py-2 rounded-lg'
          onClick={generatePassword}>
          Generate Password
        </button>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='text-white text-sm'>
          <span>Generated Password: </span>
          <span className='font-bold'>{password}</span>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='text-white text-sm'>
          <span>Copy to Clipboard: </span>
          <input type="text" value={copiedText} readOnly className='bg-gray-200 text-black px-2 py-2 mb-1 rounded-lg'
 />
        </div>
      </div>
      
       </div>
    </>
  )
}

export default App
