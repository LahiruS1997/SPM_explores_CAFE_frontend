import React, {useState, useEffect, useContext}from 'react'
import axios from 'axios';
import Box from "@material-ui/core/Box";
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'
import {Link} from 'react-router-dom'
import './viewneworders.css'
import {GlobalStateorder} from '../../../GlobalStateorder'



function ViewNewOrders({orders}){

    const state = useContext(GlobalStateorder)
    const [newOrders] = state.ordersAPI.orders

    const ListOrders = (props) => {
        return(
            <tr>
                <td>{props.record.order_id}</td>
                <td>{props.record.name}</td>
                <td>{props.record.price}</td>
                <td>{props.record.status}
                 
                </td>
            </tr>
        )
    }

    const List = newOrders.map((orders) => {
        return (
            <ListOrders record={orders}/>
        )
    })

    return (
        <div className="home" style={{fontSize: "60px"}}>
            <div className="home_icon" style={{fontSize: "40px", paddingLeft: "10px"}}>
                
                <h4>DASHBOARD</h4>
                <hr/>
            </div>
            <div style={{marginLeft:'10px' ,paddingTop:'30px'}}>
                <Grid container spacing={3} >
                    <Grid item container xs={12} style={{paddingBottom:'30px', backgroundColor:'#ADD8E6'}}>
                        
                        <Grid item xs={2} style={{border:'1px solid black', 
                            marginRight:'320px', 
                            textAlign:'center', 
                            paddingTop:'60px', 
                            paddingBottom:'60px',
                            backgroundColor:'#1E90FF'}}>
                                <IoIcons5.IoFastFood />
                            <h6>New Orders</h6>
                            <h6>6</h6>
                        </Grid>
                        <Grid item xs={3} style={{border:'2px solid black', 
                            marginRight:'320px', paddingTop:'60px', paddingBottom:'60px',
                            textAlign:'center',
                            backgroundColor:'#1E90FF'}}>                                
                            Confirmed Orders
                        </Grid>
                        <Grid item xs={2} style={{border:'1px solid black', 
                            paddingTop:'60px', paddingBottom:'60px',
                            textAlign:'center',
                            backgroundColor:'#1E90FF'}}>
                                <IoIcons5.IoFastFood />
                            <h6>Picked Orders</h6>
                        </Grid>
                    </Grid>
                    
                    
                    <Grid item xs={10} style={{ border:'2px solid black', textAlign:'center', fontSize:'28px', backgroundColor:'#FFD700', marginLeft:'100px', marginTop: '60px'}}>
                         <div className="Container">
                            <h1>New Orders List</h1>
                            <table style={{border:'2px solid black',backgroundColor:'white', marginTop: '10px'}}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th >Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {List}                                    
                                </tbody>
                            </table>
                         </div>
                         

                    </Grid>

                     
                    
                </Grid>
            </div>
        </div>
    )
}

export default ViewNewOrders
