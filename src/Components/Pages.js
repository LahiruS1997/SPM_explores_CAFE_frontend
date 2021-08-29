import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Manager/dashboard/Dashboard'
import AddEmployee from './Manager/employees/AddEmployee'
import ManageEmployee from './Manager/employees/ManageEmployee'
import CashierDashboard from './Cashier/Dashboard/CashierDashboard'
import {DataProvider} from '../../src/GlobalState'
import OrderList from './Cashier/Orders/OrderList'
import Reports from './Cashier/Reports/ReportsList/Reports'
import CreateReport from './Cashier/Reports/CreateReport/CreateReport'
import EditReport from './Cashier/Reports/CreateReport/EditReport'
import ViewAllCategorys from './Cashier/Categories/ViewAllCategorys'
import Sub from './Cashier/Reports/ReportsList/Sub'
import ViewReport from './Cashier/Reports/ReportsList/ViewReport'

function Pages(){
    return (
        <DataProvider>
            <Switch>
                <Route path="/dashboard_manager" exact component={Dashboard}/>
                <Route path="/employee/add_employee" exact component={AddEmployee} />
                <Route path="/employee/manage_emp" exact component={ManageEmployee} />
                <Route path="/" exact component={CashierDashboard}/>
                <Route path="/orders-list" exact component={OrderList}/>
                <Route path="/reports" exact component={Reports}/>
                <Route path="/create-report" exact component={CreateReport}/>
                <Route path="/edit-report/:reportid" exact component={EditReport}/>
                <Route path="/view-report/:reportid" exact component={ViewReport}/>
                <Route path="/submit-reports/" exact component={Sub}/>
                

                <Route path="/cashierCategory" exact component={ViewAllCategorys} />
            
            </Switch>
        </DataProvider>
    )
}
  

export default Pages 