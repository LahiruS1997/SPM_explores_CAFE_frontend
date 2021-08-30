import React from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './Components/KitchenManager/pages';
import SideBarKM from './Components/Headers/manager/KitchenManager/KMSidebar'
import {DataProvider} from './GlobalStateorder'
import './index.css'

function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">                 
        <SideBarKM />
        <div className="mainPages">
          <Pages />
        </div>        
      </div>
    </Router>
    </DataProvider>
  );
}
      
export default App;
