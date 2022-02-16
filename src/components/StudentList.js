import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import { StudentContext } from '../StudentContext';

function StudentList() {
    const history = useNavigate();
    const {StudentData} = useContext(StudentContext);
    
    function StudentDetail(id){
        history(`/detail/${id}`);
    }
  return (
    <section className='student_list'>
    <h1>User List</h1>
    <table>
        <thead>
      <tr>
        <th>Roll No.</th>
        <th>Name</th>
        <th>Class</th>
        <th>Age</th>
      </tr>
      </thead>
      <tbody>
    {
        StudentData.map((data)=>{
            return(
                <tr onClick={()=>StudentDetail(data.RollNumber)} key={data.RollNumber}>
                    <td>{data.RollNumber}</td>
                    <td>{data.Name}</td>
                    <td>{data.Class}</td>
                    <td>{data.Age}</td>
                </tr>
            )
        })
    }
      <tr>
        <td>1</td>
        <td>Rohit</td>
        <td>10</td>
        <td>15</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Rohit</td>
        <td>10</td>
        <td>15</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Rohit</td>
        <td>10</td>
        <td>15</td>
      </tr>
      </tbody>
    </table>
    </section>
  )
}

export default StudentList