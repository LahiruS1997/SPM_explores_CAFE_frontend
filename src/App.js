import React from 'react'
// import SideBar from './Components/Headers/manager/SideBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './Components/Pages';
import UserSideBar from './Components/Headers/user/UserSideBar'
import {DataProvider} from './GlobalState'


function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <UserSideBar />
        {/* <SideBar /> */}
        <Pages />
      </div>
    </Router>
    </DataProvider>
  );
}
      
export default App;
