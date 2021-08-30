import React, {createContext, useState} from 'react'
import FoodsAPI from './api/FoodsAPI'
import OrdersAPI from './api/OrdersAPI'


export const GlobalStateorder = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
     
    

    // OrdersApi
    const state = {
        token: [token, setToken],
        ordersAPI: OrdersAPI(),
        foodsAPI: FoodsAPI()
    }


    return(
        <GlobalStateorder.Provider value={state}>
            {children}
        </GlobalStateorder.Provider>
        
    )
}