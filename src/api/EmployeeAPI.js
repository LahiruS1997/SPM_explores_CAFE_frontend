import {useEffect, useState} from 'react'
import axios from 'axios'

export default function EmployeeAPI(token){
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    
    const [isManager, setIsManager] = useState(false)
    const [isCashier, setIsCashier] = useState(false)
    
    const [history, setHistory] = useState([])
    const [callback] = useState(false)

    useEffect(() => {
        if(token){
            const getUser = async () => {
                try {
                    const res= await axios.get('/employee/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 4 ? setIsManager(true) : setIsManager(false)

                    res.data.role === 2 ? setIsCashier(true) : setIsCashier(false)

                } catch (err) {
                    alert(err.responce.data.msg)
                }
            }
            getUser()
        }
    },[token])

    useEffect(() => {
        if(token){
            const getHistory = async() => {
                const res = await axios.get('/employee/history', {
                    headers: {Authorization: token}
                })
                setHistory(res.data)
            }
            getHistory()
        }
    }, [token, callback])

    /*const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })
        }else{
            alert("Thiss product already added to the cart")
        }
    }   */

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isManager: [isManager, setIsManager],
        isCashier: [isCashier, setIsCashier]
    }
}