import './App.css';
import logo from './1.jpg'
import {x,y,total,Myfun} from './Val'
import React from 'react'
import Article from './Components/Home/Article'

const App = () =>{
  return (
    <div className="app">
        <h2 className="">
            hello naji {x} 
        </h2>
        <h2 className="">
            hello {Myfun()} {y} 
        </h2>
        <h2 className="">
        total : {total} 
        </h2>
        <Article/>
        <img className='img' src={logo} alt=''></img>
    </div>
  );
}

export default App;
