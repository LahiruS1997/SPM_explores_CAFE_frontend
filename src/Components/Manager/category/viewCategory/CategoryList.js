import React, {useContext} from 'react'
import { GlobalState } from '../../../../GlobalState'
import CategoryItem from './CategoryItem'

import * as IoIcons5 from 'react-icons/io5'

function CategoryList() {
    const state = useContext(GlobalState)
    const [Categorys] = state.categoryAPI.category

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Category List</h4>
            </div>
            <hr />
            <div className="categorys">
                {
                    Categorys.map(category => {
                        return <CategoryItem key={category._id} category={category} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList
