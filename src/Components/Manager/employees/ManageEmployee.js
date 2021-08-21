import React, { useContext } from 'react'
import * as BsIcons from 'react-icons/bs'
import { GlobalState } from '../../../GlobalState'
import SingleEmp from './SingleEmp'

export default function ManageEmployee(){
    const state = useContext(GlobalState)
    
    const [users] = state.userAPI.usersList

    return (
        <div >
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Employee Management</h4>
            </div>
            <hr />
            
            <div className="emp-manage-page">
                <h4>There are {users.length} of Employees</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Emergency Phone</th>
                            <th>Duty Type</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                /*<tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.emergencyPhone}</td>
                                    <td>{user.dutyType}</td>
                                    <td>{user.status}</td>
                                    <td></td>
                                </tr>*/
                                return <SingleEmp key={user._id} user={user} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}   