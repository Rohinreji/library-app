import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
export const AdminViewApproveTutor = () =>
{
    const[data,setData] = useState([])

    const getData = async() =>
    {
        try {
           const response = await axios.get("http://localhost:3005/viewAllApprovedTutors") 
           setData(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
console.log(data,"data");

useEffect(()=>
{
    getData()
},[])
    return(
        <div>
            <h2>Approved tutors</h2>
 <Table
  striped bordered hover
  className='adminApproveTutor-table'
 >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>Id No</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((e,i)=>
        {
        return(
            <tr>
            <td>{i+1}</td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>{e.idNo}</td>
          </tr> 
        )
        })
       }
      
    
      </tbody>
    </Table>
        </div>
    )
}