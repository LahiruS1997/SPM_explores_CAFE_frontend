import React, {useContext} from 'react'
import { GlobalState } from '../../../../GlobalState'
import CategoryItem from './CategoryItem'

import * as IoIcons5 from 'react-icons/io5'

function CategoryList() {
    const state = useContext(GlobalState)
    const [Categorys] = state.categoryAPI.category
    const [callBack, setCallBack] = state.categoryAPI.callback

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Category List</h4>
            </div>
            <hr />
            <div className="categorys" style={{marginTop:'36px'}}>
                {
                    Categorys.map(category => {
                        return <CategoryItem key={category._id} category={category} callBack={callBack} setCallBack={setCallBack} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList
