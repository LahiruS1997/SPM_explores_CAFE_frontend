import React from 'react'
import { Link } from 'react-router-dom'

function SingleEmp({user}) {
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.emergencyPhone}</td>
                <td>{user.dutyType}</td>
                <td>{user.status}</td>
                <td><Link to={`/user/${user._id}`}>View</Link></td>                
            </tr>
        </>
    )
}

export default SingleEmp