import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import ReadyTo from './orders/ReadyToPickupOrders'
import Menu from './menu/Menu'
import AddFoods from './menu/AddFoods'
import ViewNewOrders from './orders/ViewNewOrders'
import DetailMenu from './menu/DetailMenu'

function Pages(){
    return (
        <Switch>
            <Route path="/viewnew" exact component={ViewNewOrders}/>
            <Route path="/detail" exact component={DetailMenu}/>
        
            <Route path="/ready" exact component={ReadyTo} />
            <Route path="/menu/foods" exact component={Menu} />
            <Route path="/menu/addnewfood" exact component={AddFoods} />
             
        </Switch>
    )
}
  

export default Pages