import React, {useState, useContext, useEffect} from 'react'
import {useParams, useparams} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

const initialState = {
    name: ''
}
function FoodDetails() {

    const param = useParams()
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodListAPI.foodList
    const [foodItem, setFoodItem] = useState(initialState)
    const [foodsDetails, setFoodsDetails] = useState([])
    const [image, setImage] = useState(false)

    useEffect (() => {
        if(param.id){
            foods.forEach(foodItem => {
                if(foodItem._id === param.id){
                    setFoodItem(foodItem)
                    setImage(foodItem.images)
                }
            })
        }
    })

    const handleChangeInput = e => { 
        const {name, value} = e.target
        setFoodItem({...foodItem, [name]:value})
    }
    
    return (
        <div className="main-box" style={{
            boxShadow: "0 10px 30px #BBB",
            padding: '20px 40px'
        }}>
            <div className="form-row" style={{
                fontSize: '40px', 
                marginBottom:'20px', 
                color:'white',
                backgroundColor: 'gray',
                paddingBottom:'5px',
                textAlign: 'center'
            }}>            
                <span>{foodItem.name}</span>
            </div>
            <div>
                <img src={image.url} alt="" style={{
                    width: '100%',
                    height: '400px',
                    display: 'block',
                    objectFit: 'cover',
                    boxShadow: '0 0 35px rgb(116, 116, 116)'
                }} />
            </div>
            <div style={{
                fontSize: '25px',
                marginTop:'10px',
                
            }}>
                
                <div className="form-row">            
                    <span>Sold : {foodItem.sold}</span>
                </div>
                <div className="form-row">            
                    <span>Description :{foodItem.description}</span>
                </div>
                <div className="form-row">                
                    <span>Ingredients : {foodItem.ingredients}</span>
                </div>
            </div>

        </div>
    )
}

export default FoodDetails
