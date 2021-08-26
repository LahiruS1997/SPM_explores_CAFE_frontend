import React,{useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import FoodItem from '../UserPages/foodItem/FoodItem'

export default function Menu(){
    const state = useContext(GlobalState)
    const [foods] = state.menuAPI.foods
    console.log(foods)
    return (
        <div className="foods">
            {
                foods.map(food => {
                    return <FoodItem key={food._id} food={food}/>
                })
            }
        </div>
    )
}