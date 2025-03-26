import React, { useState } from 'react'
import {useNavigate } from "react-router";
import axios from 'axios';
const AddUser = () => {
    const navigate = useNavigate();
    const createUserApi = "https://67e475a72ae442db76d48145.mockapi.io/users"
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })


    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        try {
            const response = await axios.post(createUserApi, user).then(function (response) {
                console.log(response);
                setUser({name: "",email: "",phone: ""})
                navigate('/');
            }).catch(function (error) {
                console.log(error);});
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='user-form'>
            <div className='heading'>\
            
                <p>User Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default AddUser