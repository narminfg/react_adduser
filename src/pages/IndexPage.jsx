import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import{useState} from 'react';
import axios from 'axios'

const IndexPage = (props) => {
    const[value,setValue]=useState('');

    const{id,name,phone}=props.userList;
    const filteredUsers=props.userList.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    const InputHandler=(e)=>{
        setValue(e.target.value)
          }
    const DeleteHandler = async (id) => {
      await axios.delete (`https://jsonplaceholder.typicode.com/users/${id}`)
      }
      
  return (
    <div className='container mt-3' >
              <input onChange={InputHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto my-3' />

        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Fullname</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
{
   filteredUsers.map(user => {
        return(
        <tr key={user.id}>
           <td>{user.id}</td> 
           <td>{user.name}</td> 
           <td>{user.phone}</td> 
           <td>
           <button className='btn btn-warning me-2' ><FaEdit />Update</button>
            <button onClick={DeleteHandler(user.id)} className='btn btn-danger' ><MdDelete/>Delete</button>
            </td> 
        </tr>
        )
    })
}

  </tbody>
</table>
    </div>
  )
}

export default IndexPage