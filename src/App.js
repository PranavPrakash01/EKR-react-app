import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom" ;

import Main from "./pages/main"
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
        <div className="pages" >
          <Routes>
            <Route exact path="/" element={<Main/>}/>
          </Routes>
        </div>
        
      
    </Router>
    
  );
}
export default App;
