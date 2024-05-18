import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 left-80  px-2 insect-x-0'>
        <div className='flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")}
           className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"red"}}
           >Red</button>
            <button onClick={()=>setColor("green")}
            className='outline-none text-white rounded-3xl px-3 py-2 '
           style={{backgroundColor:"green"}}
           >green</button>
            <button onClick={()=>setColor("blue")}
             className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"blue"}}
           >blue</button>
            <button onClick={()=>setColor("pink")}
             className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"pink"}}
           >pink</button>
            <button onClick={()=>setColor("black")}
             className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"black"}}
           >black</button>
            <button onClick={()=>setColor("grey")}
             className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"grey"}}
           >grey</button>
            <button onClick={()=>setColor("purple")}
            className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"purple"}}
           >purple</button>
           <button onClick={()=>setColor("orange")}
           className='outline-none text-white rounded-3xl px-3 py-2'
           style={{backgroundColor:"orange"}}
           >orange</button>
        </div>
      </div>
    </div>
    </>
      
  )
}

export default App;
