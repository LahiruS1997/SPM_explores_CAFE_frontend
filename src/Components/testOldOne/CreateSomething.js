import React, {useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function CreateSomething() {

    const [somethingName, setSomeName] = useState('')
    const [someCount, setSomeCount] = useState('')

    function setData (e) {
        e.preventDefault()
        const somethingNew = {
            somethingName,
            someCount,
            something_id: uniqid()
        };
        axios.post("http://localhost:5000/somethingUseFrom/createSomething", somethingNew)
            .then(() => {
                alert("Something ADD");
            }).catch((err)=>{
                alert(err);
            });
    };

    return (
        <div style={{padding: '100px 200px'}}>
            <div>
                <form style={{border: '1px solid red', paddingBottom:'10px'}}>
                    <h2>Create something.</h2>
                    <div style={{marginTop: '20px'}}>
                        <label>Some Name</label>
                        <input type="text" name="someName" onChange={(e)=>{
                            setSomeName(e.target.value);
                        }} />
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <label>Some Count</label>
                        <input type="text" name="someCount" onChange={(e)=>{
                            setSomeCount(e.target.value);
                        }} />
                    </div>

                    <div>
                        <button style={{margin:'20px 20px'}} onClick={setData}>Save something</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateSomething
