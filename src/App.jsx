import { useState } from 'react'

function App() {
  let [color,setcolor]=useState("white")

  return (
    <>
      <div className='w-full h-screen duration-500'
      style={{backgroundColor: color}}>
        <div className='flex flex-col inset-x-0 px-20'>
        <h1 className='text-blue-950 md:text-8xl sm:text-5xl text-center mt-52 mb-14'>Background Changer</h1>
        <div className="flex flex-wrap justify-center xl:gap-28 lg:gap-14 md:gap-7 sm:gap-5 shadow-2xl bg-slate-200 py-5 rounded-xl">
          <button 
          onClick={() => setcolor("#f09e56")} className="outline-none px-5 py-5 rounded-full bg-ory"></button>
          <button 
          onClick={() => setcolor("#e388d5")} className="outline-none px-5 py-5 rounded-full bg-queen"></button>
          <button 
          onClick={() => setcolor("#d64b57")} className="outline-none px-5 py-5 rounded-full bg-re"></button>
          <button 
          onClick={() => setcolor("#4676a6")} className="outline-none px-5 py-5 rounded-full bg-bl"></button>
          <button 
          onClick={() => setcolor("#a4db5c")} className="outline-none px-5 py-5 rounded-full bg-lim"></button>
          <button 
          onClick={() => setcolor("#d14f8e")} className="outline-none px-5 py-5 rounded-full bg-pin"></button>
          
</div>
          </div>
      </div>

    </>
  )
}

export default App
