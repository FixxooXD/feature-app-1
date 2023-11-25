import './App.css';
import { useState } from 'react';

function App() {
 
  const content = [
                   [
                    "React is extremely popular", 
                   "Ultimate flexibility and compatibility", 
                   "Hassle-free reusability of components"
                  ],
                   [
                    "JSX (JavaScript Syntax Extension)",
                   "Virtual DOM",
                   "One-way data binding",
                   "Performance"
                  ],
                   [
                    "React Documentation",
                    "Youtube"
                   ]
                  ];

  const [activeContentIndex, setActiveContentIndex] = useState(0);  
  
  

  return (
    <div className="App">
      <div>Rendering using React!!</div>
      <div className='flex justify-center justify-around mx-[35%] mt-4'>
      <button className={ activeContentIndex === 0 ? "bg-black text-white px-2" : "bg-none"} onClick={() => setActiveContentIndex(0)} >Why React</button>
      <button className={activeContentIndex === 1 ? "bg-black text-white px-2" : "bg-none"} onClick={() => setActiveContentIndex(1)}>Core features</button>
      <button className={activeContentIndex === 2 ? "bg-black text-white px-2" : "bg-none"} onClick={() => setActiveContentIndex(2)} >Related Resources</button>
      </div>
     <div>
     <div className='border-2 mt-4 mx-[30%] flex justify-cols justify-center'>
       <ul class="list-disc ">
          {content[activeContentIndex].map((list)=> (<li className='mx-[2rem]'>{list}</li>))}
       </ul>
     </div> 
     </div>
    </div>
  );
}

export default App;
