import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {useContext} from 'react';
import { StudentContext } from '../StudentContext';

function StudentDetail() {
    const {StudentData,setStudentData} = useContext(StudentContext);
    const {id} = useParams();
    const [edit, setEdit] = useState({
        RollNumber:false,
        Name:false,
        Class:false,
        Age:false,
        Address:false
    });

    const [editData, setEditData] = useState({
        RollNumber:"",
        Name:"",
        Class:"",
        Age:"",
        Address:""
    });
    const [student, setStudent] = useState({});
    useEffect(()=>{
        let obj = StudentData.find(o => o.RollNumber == id);
        setStudent(obj);
    },[id]);

    function EditData(name,id,val){
        setEditData({
            ...editData,
            [name]:val
        })
        setEdit({
            ...edit,
            [name]:true
        })
    }
    function SaveData(name,id){
       let state = StudentData.map((data)=>{
            if (data.RollNumber===id) {
                setStudent({
                    ...data,
                    [name]:editData[name]
                })
                return({
                    ...data,
                    [name]:editData[name]
                })
            }
            else{
                return data
            }
        })
        setEdit({
            ...edit,
            [name]:false
        })
        setStudentData(state);
    }
  return (
    <section className='student_detail'>
        <h1>Student Detail</h1>
        <ul>
            {
                student &&
                <>
                    <li><p><span>Roll Number :</span> {!edit.RollNumber?student.RollNumber:""} {edit.RollNumber && <input value={editData.RollNumber} onChange={(e)=>setEditData({...editData,RollNumber:e.target.value})} type='text' />}</p>{!edit.RollNumber?<button onClick={()=>EditData("RollNumber",student.RollNumber,student.RollNumber)}>Edit</button>:<button onClick={()=>SaveData("RollNumber",student.RollNumber)}>Save</button>}</li>
                    <li><p><span>Name : </span>{!edit.Name?student.Name:""} {edit.Name && <input value={editData.Name} onChange={(e)=>setEditData({...editData,Name:e.target.value})} type='text' />}</p>{!edit.Name?<button onClick={()=>EditData("Name",student.RollNumber,student.Name)}>Edit</button>:<button onClick={()=>SaveData("Name",student.RollNumber)}>Save</button>}</li>
                    <li><p><span>Class : </span>{!edit.Class?student.Class:""} {edit.Class && <input value={editData.Class} onChange={(e)=>setEditData({...editData,Class:e.target.value})} type='text' />}</p>{!edit.Class?<button onClick={()=>EditData("Class",student.RollNumber,student.Class)}>Edit</button>:<button onClick={()=>SaveData("Class",student.RollNumber)}>Save</button>}</li>
                    <li><p><span>Age : </span>{!edit.Age?student.Age:""} {edit.Age && <input value={editData.Age} onChange={(e)=>setEditData({...editData,Age:e.target.value})} type='text' />}</p>{!edit.Age?<button onClick={()=>EditData("Age",student.RollNumber,student.Age)}>Edit</button>:<button onClick={()=>SaveData("Age",student.RollNumber)}>Save</button>}</li>
                    <li><p><span>Address :</span> {!edit.Address?student.Address:""} {edit.Address && <input value={editData.Address} onChange={(e)=>setEditData({...editData,Address:e.target.value})} type='text' />}</p>{!edit.Address?<button onClick={()=>EditData("Address",student.RollNumber,student.Address)}>Edit</button>:<button onClick={()=>SaveData("Address",student.RollNumber)}>Save</button>}</li>
                </>
            }
            
        </ul>
    </section>
  )
}

export default StudentDetail