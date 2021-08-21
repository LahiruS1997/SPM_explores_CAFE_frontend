import {useEffect, useState} from 'react'
import axios from 'axios'

export default function UserAPI(token){
    const [usersList, setUsersList] = useState([])
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [callback] = useState(false)

    const getUsersInformations = async () => {
        const res = await axios.get('http://localhost:5000/user/getUser')
        //setUsersList(res.data)
        setUsersList(res.data)
    }
    useEffect(() => {
        getUsersInformations()
    },  [callback])

    useEffect(() => {
        if(token){
            const getUser = async () => {
                try {
                    const res= await axios.get('http://localhost:5000/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 4 ? setIsAdmin(true) : setIsAdmin(false)

                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.message)
                }
            }
            getUser()
        }
    },[token])

    useEffect(() => {
        if(token){
            const getHistory = async() => {
                const res = await axios.get('/user/history', {
                    headers: {Authorization: token}
                })
                setHistory(res.data)
            }
            getHistory()
        }
    }, [token, callback])

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        usersList: [usersList, setUsersList],
        cart: [cart, setCart]
    }
}