import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Manager/dashboard/Dashboard'
import AddEmployee from './Manager/employees/AddEmployee'
import ManageEmployee from './Manager/employees/ManageEmployee'
import CashierDashboard from './Cashier/Dashboard/CashierDashboard'
import {DataProvider} from '../../src/GlobalState'
import OrderList from './Cashier/Orders/OrderList'
import Reports from './Cashier/Reports/Reports'
import CreateReport from './Cashier/Reports/CreateReport/CreateReport'

function Pages(){
    return (
        <DataProvider>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/employee/add_employee" exact component={AddEmployee} />
                <Route path="/employee/manage_emp" exact component={ManageEmployee} />
                <Route path="/dashboard_cashier" exact component={CashierDashboard}/>
                <Route path="/orders-list" exact component={OrderList}/>
                <Route path="/reports" exact component={Reports}/>
                <Route path="/create-report" exact component={CreateReport}/>
            
            </Switch>
        </DataProvider>
    )
}
  

export default Pages 