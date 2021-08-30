import {useState, useEffect} from 'react'
import axios from 'axios'

function FoodsAPI() {
    const [foodList, setFoodList] = useState([])
    const [singleFood, setSingleFood] = useState([])
    const [callback, setCallback] = useState(false)

    /*const getCategory = async () => {
        const res = await axios.get('http://localhost:5000/api/category')
        setCategory(res.data)
    }*/

    useEffect(() => {
        const getFoodList = async () => {
            const res = await axios.get('http://localhost:5000/api/foods')
            setFoodList(res.data)
        }
        getFoodList()
    }, [callback])

    return {
        foodList: [foodList, setFoodList],
        callback: [callback, setCallback]
    }
}

export default FoodsAPI
