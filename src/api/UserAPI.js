import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try{
                    const res = await axios.get('user/infor', {
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)

                } catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }

    },[token])

    const addCart = async (food) => {
        if(!isLogged) return alert("Please login to buy")

        const check = cart.every(item =>{
            return item._id !== food._id
        })
    }
    return {
        isLogged: [isLogged, setIsLogged]
    }
}

export default UserAPI
