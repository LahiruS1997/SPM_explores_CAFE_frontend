import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function ViewAllThings() {

    const [postdata, setPostdata] = useState([])

    function deleteItem(something_id){
        axios.delete(`http://localhost:8070/somethingUseFrom/deleteSomething/${something_id}`).then(res => {
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(something_id)
    }
    

    //get data from db once the page loaded.
    useEffect(() => {
        axios.get("http://localhost:5000/somethingUseFrom/viewAll").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    //map all datas
    const ListOfAll = (props)=>{
        return(
            <tr>
                <td>{props.record.somethingName}</td>
                <td>{props.record.someCount}</td>
                <td>
                    <button style={{marginRight:'10px'}} 
                    onClick={() => {
                            deleteItem(props.record.something_id);
                        }}>Delete</button>
                    <Link to="#">Edit</Link>
                </td>
                {/**
                 * onClick={() => {
                            deleteItem(props.record.something_id);
                        }} 
                 */}
            </tr>
        )
    }

    const listOfSomething = postdata.map((post) => {
        return (
            <ListOfAll record = {post}/>
        )
    })

    return (
        <div>
            <div style={{marginRight:'40px', marginLeft:'40px'}}>
            <br/><h2 style={{fontFamily:'Gabriola'}}>List of All 'Things'.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfSomething}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewAllThings
