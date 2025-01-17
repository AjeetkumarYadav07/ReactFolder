import React, { useState } from 'react'

const App = () => {

  const [color , setcolor] = useState("green")
  return (

    <>
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
     <div className='flex flex-wrap justify-evenly gap-2'>
     
       <div className='bg-black px-3 py-1 rounded-xl mt-1 text-white'>
        <button onClick={ () =>{
         setcolor("red")  
        }} > red</button>
       </div>
     
       <div className='bg-black px-3 py-1 rounded-xl mt-1 text-white'>
        <button onClick={ () =>{
          setcolor("blue")
        }}
        
        > Blue</button>
       </div>

       <div className='bg-black px-3 py-1 rounded-xl mt-1 text-white'>
        <button onClick={ () =>{
          setcolor("Green")
        }}
        > Green</button>
       </div>

       <div className='bg-black px-3 py-1 rounded-xl mt-1 text-white'>
        <button onClick={ () =>{
          setcolor("black")
        }}
        
        > Black</button>
       </div>
    
     
     </div>

      
     
     
    </div>
    
    </>
   
  )
}

export default App