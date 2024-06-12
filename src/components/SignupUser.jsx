import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

const SignupUser = () => {
    const [data, setData] = useState({
        name: "",
        dob: "",
        bloodgrp: "",
        mobile: "",
        address: "",
        pin: "",
        dist: "",
        place: "",
        email: "",
        username: "",
        password: "",
        cpass: ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: 
            event.target.value });
    }

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8083/SignupUser", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status == "success") {
                    alert("Success");
                } else {
                    alert("Error");
                }
            })
            .catch()
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <center><h1><b>REGISTER</b></h1></center><br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">BLOOD GROUP</label>
                                <input type="text" className="form-control" name='bloodgrp' value={data.bloodgrp} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PHONE</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <textarea className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DISTRICT</label>
                                <select className="form-control" name='dist' value={data.dist} onChange={inputHandler}>
                                    <option value="thrissur">Thrissur</option>
                                    <option value="eranamkulam">Eranamkulam</option>
                                    <option value="palakad">Palakad</option>
                                    <option value="kozhikode">Kozhikode</option>
                                    <option value="kasarkode">Kasarkode</option>
                                    <option value="thiruvananthapuram">Thiruvananthapuram</option>
                                    <option value="wayanad">Wayanad</option>
                                    <option value="idukki">Idukki</option>
                                    <option value="malappuram">Malappuram</option>
                                    <option value="kottayam">Kottayam</option>
                                    <option value="alappuzha">Alappuzha</option>
                                    <option value="kannur">Kannur</option>
                                    <option value="pathanamthitta">Pathanamthitta</option>
                                    <option value="kollam">Kollam</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PINCODE</label>
                                <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PLACE</label>
                                <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USER NAME</label>
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" className="form-control" name='cpass' value={data.cpass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><button className="btn btn-success" onClick={readValue}>REGISTER</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupUser
