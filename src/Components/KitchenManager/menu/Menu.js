 import React, {useContext} from 'react'
 import {GlobalStateorder} from '../../../GlobalStateorder'
import FoodItem from '../Items/FoodItem'
import * as IoIcons5 from 'react-icons/io5'


 function Menu() {
     const state = useContext(GlobalStateorder)
     const [foods] = state.foodsAPI.foods
     console.log(foods)

     return (
         <div>
             <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Foods List</h4>
            </div>
            <hr />
            <div className="foods">
                <div className="foodslist">
                    {
                        foods.map(food => {
                            return <FoodItem key={food._id} food={food}/>
                            
                        })
                    }
                </div>
            </div>
         </div>
     )
 }
 
 export default Menu
