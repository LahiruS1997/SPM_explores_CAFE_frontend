import React, {useState, useEffect, useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import { useHistory, useParams } from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'
import Loading from '../../../utils/loading/Loading'
import './CreateCategory.css'
import axios from 'axios'

const initialState = {
    category_id: '',
    status: '',
    _id: ''
}

export default function CreateCategory(){

    const state = useContext(GlobalState)
    const [isLogged] = state.employeeAPI.isLogged

    const [category, setCategory] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    const styleUpload = {
        display: images ? "block" : "none"
    }

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Add Category</h4>
            </div>
            <hr />

            <div className="create_category">
                <div className="upload">
                    <input type="file" name="file" id="file_up" />
                    {
                        loading ? <div id="file_img"><Loading /></div>

                        :<div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span >X</span>
                        </div>
                    }
                </div>

                <form>
                    <div className="row">
                        <label htmlFor="category_id">Category ID</label>
                        <input type="text" name="category_id" id="category_id" required value={category.category_id} />
                    </div>
                    <div className="row">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text" name="category_name" id="category_name" required value={category.categoryName} />
                    </div>
                    <div className="row">
                        <label htmlFor="category_id">Status</label>
                        <select name="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>

        </div>
    )
}