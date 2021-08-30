 import axios from 'axios'
import React, { useState, useEffect } from 'react'
 
 function FoodsAPI() {
     const [foods, setFoods] = useState([])

     const getFoods = async () => {
         const res = await axios.get('http://localhost:5000/api/foods')
         setFoods(res.data.foods)
        //  console.log(res.data.foods)
     }

    useEffect(() => {
        getFoods()
    },[])

     return  {
         foods: [foods, setFoods]
     }
 }
 
 export default FoodsAPI
 