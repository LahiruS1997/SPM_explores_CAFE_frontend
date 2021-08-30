import React, {createContext, useState, useEffect} from 'react';
import CategoryAPI from './api/CategoriesAPI'
import UserAPI from './api/UserAPI';
import axios from 'axios'
import FoodsAPI from './api/FoodsAPI';

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
    const refreshToken = async () => {
        const res = await axios.get('http://localhost:5000/user/refresh_token')
        setToken(res.data.accesstoken)
    }
    useEffect(() => {
        refreshToken()
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])
    const state = {
        token: [token, setToken],
        userAPI: UserAPI(token),
        //employeeAPI: EmployeeAPI(token),
        categoryAPI: CategoryAPI(),
        foodListAPI: FoodsAPI()
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}