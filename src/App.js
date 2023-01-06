import './App.css';
import FoldOne from "./Components/FoldOne/FoldOne"
import FoldTwo from './Components/FoldTwo/FoldTwo';
import {useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  
  return (
    
    <div className="App">
      
      <div className='head'>
        <FoldOne />
      </div>
      <div className='toe'>
        <FoldTwo />
      </div>
      
    </div>
  );
}

export default App;
