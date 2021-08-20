import { Grid } from '@material-ui/core'
import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import * as BsIcons from 'react-icons/bs'
import './employee.css'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns';

const styles = {
    outer: {
      borderRadius: 5,
      boxShadow: "0 10px 30px #BBB",
      padding: 10,
    },
  };

export default function AddEmployee(){
    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Add Employee</h4>
            </div>
            <hr />
            <div>
            <div style={styles.outer} className="form_emp">
                <form>
                    <Grid container spacing={2} direction="row" style={{textAlign:'center'}}>
                        <Grid item sm={4} xs={12}>
                            <div>Full Name</div>
                            <input type="text" placeholder="Full Name" required/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Designation</div>
                            <select name="designation">
                                <option value="">Select...</option>
                                <option value="cashier">Cashier</option>
                                <option value="kitchen manager">Kitchen Manager</option>
                                <option value="supplier">Supplier</option>
                            </select>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Email Address</div>
                            <input type="email" placeholder="Email" required/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Phone</div>
                            <input type="number" placeholder="Phone" required/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Date of Birth</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                /*value={selectedDate}
                                onChange={handleDateChange}*/
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}/>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Gender</div>
                            <select name="gender">
                                <option value="">Select gender...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Emargency phone</div>
                            <input />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Hire Date</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                /*value={selectedDate}
                                onChange={handleDateChange}*/
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}/>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Duty type</div>
                            <select name="duty">
                                <option value="fullTime">Full Time</option>
                                <option value="partTime">Part Time</option>
                            </select>
                        </Grid>
                        {/*<Grid item sm={4} xs={12}>
                            <div>Photograph</div>
                            <button className="photoButton">Chose file</button>
                            </Grid>*/}
                        <Grid item sm={4} xs={12}>
                            <div>User name</div>
                            <input />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div>Password</div>
                            <input type="password" placeholder="password"/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <button className="addEmp">Add Employee</button>    
                        </Grid>
                        
                    </Grid>
                </form>
            </div>
            </div>
        </div>
    )
}