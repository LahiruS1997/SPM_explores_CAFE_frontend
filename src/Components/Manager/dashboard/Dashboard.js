import { Grid } from '@material-ui/core'
import React from 'react'
import * as IoIcons5 from 'react-icons/io5'

function Dashboard(){
    return (
        <div className="home">
            <div className="home_icon">
                <IoIcons5.IoHome />
                <hr/>
            </div>
            <div style={{marginLeft:'10px' ,paddingTop:'30px'}}>
                <Grid container spacing={3}>
                    <Grid item container xs={12} style={{paddingBottom:'30px'}}>
                        {/*<div style={{display:"flex", flexWrap:"wrap", paddingBottom:'50px'}}>
                            <div style={{border:"1px solid black", padding:'40px 80px', marginRight:'300px', borderRadius:'7%'}}>
                                hi
                            </div>
                            <div style={{border:"1px solid black", padding:'40px 80px', marginRight:'300px', borderRadius:'7%'}}>
                                hi
                            </div>
                            <div style={{border:"1px solid black", padding:'40px 80px', borderRadius:'7%'}}>
                                hi
                            </div>
                        </div>*/}
                        <Grid item xs={2} style={{border:'1px solid black', 
                            marginRight:'365px', 
                            textAlign:'center', 
                            paddingTop:'60px', 
                            paddingBottom:'60px'}}>
                            <h5>Total Orders</h5>
                        </Grid>
                        <Grid item xs={2} style={{border:'1px solid black', 
                            marginRight:'365px', paddingTop:'60px', paddingBottom:'60px',
                            textAlign:'center'}}>
                            Total Customers
                        </Grid>
                        <Grid item xs={2} style={{border:'1px solid black', 
                            paddingTop:'60px', paddingBottom:'60px',
                            textAlign:'center'}}>
                            Total Sales
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={5} style={{textAlign:'center', fontSize:'28px', backgroundColor:'yellow', marginRight:'240px'}}>
                        <h4>Latest orders</h4>
                        <h4>Latest orders</h4>
                        <h4>Latest orders</h4>
                    </Grid>

                    <Grid item xs={5} style={{textAlign:'center', fontSize:'28px', backgroundColor:'red'}}>
                        Sales
                    </Grid>
                    
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard
