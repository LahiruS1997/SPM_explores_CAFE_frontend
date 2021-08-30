import React, { useState, useEffect } from 'react'
import axios from 'axios'

function OrdersAPI() {
    const [orders, setOrders] = useState([])

    

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get('http://localhost:5000/api/orders')
            setOrders(res.data)
            console.log(res.data )
        }
        getOrders()
    },[])

    return  {
        orders: [orders, setOrders]
    }
         
}

export default OrdersAPI
