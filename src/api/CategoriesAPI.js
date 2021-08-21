import {useState, useEffect} from 'react'
import axios from 'axios'

export default function CategoriesAPI(){

    const [category, setCategory] = useState([])
    const [callback, setCallback] = useState(false)

    const getCategory = async () => {
        const res = await axios.get('http://localhost:5000/api/category')
        setCategory(res.data)
    }

    useEffect(() => {
        /*const getCategory = async () => {
            const res = await axios.get('/api/category')
            setCategory(res.data)
        }*/
        getCategory()
    }, [callback])

    return {
        category: [category, setCategory],
        callback: [callback, setCallback]
    }
}