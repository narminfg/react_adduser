import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddUser = () => {
  const[fin,setFin]=useState('');
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');

  const UserHandler=(e) =>{
    e.preventDefault();
  const addUser=async ()=>{
    const newUser={
      id:fin,
      name:name,
      phone:phone
    }
    await axios.post('https://jsonplaceholder.typicode.com/users',{newUser})
}
addUser();
  }
  const FinHandler=(e)=>{
    setFin=(e.target.value)
  }
  const NameHandler=(e)=>{
    setName=(e.target.value)
  }  
  const PhoneHandler=(e)=>{
    setPhone=(e.target.value)
  }

  return (
    <div className='col-lg-5 col-6 mx-auto mt-5'>
      <form onSubmit={UserHandler}>
      <input onChange={FinHandler} className='form-control' type="text"placeholder='FIN Code' />
      <input onChange={NameHandler} className='form-control my-4' type="text"placeholder='Fullname' />
      <input onChange={PhoneHandler} className='form-control' type="tel"placeholder='Phone' />
      <button  type="submit" className='btn btn-lg fw-bold btn-danger mt-3 w-100' >Add User</button>
      </form>

    </div>
  )
}

export default AddUser