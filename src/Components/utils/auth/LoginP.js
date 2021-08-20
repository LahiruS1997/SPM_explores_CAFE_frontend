import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//import axios from 'axios'

function Login() {
    /*const [employee, setEmployee] = useState({
        email:'', password: ''
    }) */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /*const onChangeInput = e => {
        const {name, value} = e.target;
        setEmployee({...employee, [name]:value})
    }   */

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            var emp = {
                email: email,
                password: password
            }
            console.log({emp})
            /*await axios.post('/employee/login', {emp})

            localStorage.setItem('firstLogin', true)
            */
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required placeholder="Email" 
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
