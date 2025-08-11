import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // Function to generate password
  const generatePassword = useCallback( () => {
    let pass = "";
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) str += '0123456789';
    if (includeSymbols) str += '!@#$%^&*()_+[]{}|;:,.<>?';

for (let i = 1; i <= array.length; i++) {
  let char = str.charAt(Math.floor(Math.random() * str.length + 1));
  pass += char;
  
}
setPassword(pass);

  },[length,includeNumbers,includeSymbols,setPassword]);

  return (
    <>
    <style>
      { `
      body {
        background-color: aqua;
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }`}
    </style>
    <h1 className='text-white  flex justify-center'>Password Generator </h1>
    <div className='w-full max-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-amber-900'> <div className='flex shadow rounded-lg overflow-hidden mb-4'>khan</div> </div>
    </>
  )
}

export default App
