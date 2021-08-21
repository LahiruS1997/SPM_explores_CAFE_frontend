import React from 'react'
import SideBar from './Components/Headers/manager/SideBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Pages from './Components/Pages';
import './index.css'
import { DataProvider } from './GlobalState'

function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <SideBar />
          <div className="mainPages">
            <Pages />
          </div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;
