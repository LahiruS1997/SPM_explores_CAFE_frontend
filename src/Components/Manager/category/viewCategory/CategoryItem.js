import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem({category}) {
    return (
        <div className="category_card">
            <img src={category.images.url} alt="" />

            <div className="category_box">
                <h2 title={category.categoryName}>{category.categoryName}</h2>
                <span>{category.status}</span>
            </div>
            
            <div className="row_btn">
                <Link id="btn_buy" to={`category_detail/${category._id}`} >
                    Edit
                </Link>
                <Link to="#" id="btn_view">Remove</Link>
            </div>
        </div>
    )
}

export default CategoryItem
