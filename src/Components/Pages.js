import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Manager/dashboard/Dashboard'
import AddEmployee from './Manager/employees/AddEmployee'
import ManageEmployee from './Manager/employees/ManageEmployee'
import CreateCategory from './Manager/category/createCategory/CreateCategory'
import Login from './utils/auth/Login'
import { GlobalState } from '../GlobalState'
import NotFound from '../NotFound'
import CategoryList from './Manager/category/viewCategory/CategoryList'

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    //const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/dashboard_manager" exact component={Dashboard}/>
            <Route path="/employee/add_employee" exact component={AddEmployee} />
            <Route path="/employee/manage_emp" exact component={ManageEmployee} />
            <Route path="/category/addNewCategory" exact component={CreateCategory} />
            <Route path="/category/category_list" exact component={CategoryList} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
        </Switch>
    )
}
  

export default Pages 