import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.menuAPI.foods
  
   
    return (
        <div className="filter_menu">
        <div className="row">
            <span>Filters:</span>
            <select name="category" >

            </select>
            
        </div>
        </div>
    )
}

export default Filters
