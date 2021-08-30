import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalStateorder} from '../../../GlobalStateorder'
import FoodItem from '../Items/FoodItem'

function DetailMenu(){
    const params = useParams()
    const state = useContext(GlobalStateorder)
    const [foods] = state.foodsAPI.foods
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params){
            foods.forEach(food => {
                if(food._id === params.id) setDetailProduct(food)
            })
        }

    },[params, foods])
    if(detailProduct.length === 0) return null;
    return(
        <>
        <div className="detail">
            <img src={detailProduct.images.url} alt=""/>
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.name}</h2>
                    <h6>code: {detailProduct.food_id}</h6>
                </div>
                
                <span>Rs. {detailProduct.price}</span>
                <p>Ingredients: {detailProduct.ingredients}</p>
                <p>Category: {detailProduct.category}</p>
                <p>Sold: {detailProduct.sold}</p>
                <p>Description: {detailProduct.description}</p>

                 

            </div>
        </div>
 
         
        </>
    )
}

export default DetailMenu