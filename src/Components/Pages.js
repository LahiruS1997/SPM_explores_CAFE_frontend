import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Manager/dashboard/Dashboard'
import AddEmployee from './Manager/employees/AddEmployee'
import ManageEmployee from './Manager/employees/ManageEmployee'
import ViewHome from './UserPages/ViewHome'
import Menu from './UserPages/Menu'
import DetailMenu from './UserPages/detailProduct/DetailProduct'
import Map from './UserPages/Map'
import Login from './UserPages/auth/Login'
import Register from './UserPages/auth/Register'

function Pages(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/employee/add_employee" exact component={AddEmployee} />
            <Route path="/employee/manage_emp" exact component={ManageEmployee} />
            <Route path="/home" exact component={ViewHome} />
            <Route path="/menu" exact component={Menu}/>
            <Route path="/detail/:id" exact component={DetailMenu}/>
            <Route path="/map" exact component={Map}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
        </Switch>
    )
}
  

export default Pages 