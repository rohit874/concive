import './App.css';
import StudentDetail from './components/StudentDetail';
import StudentList from './components/StudentList';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {StudentContext} from './StudentContext';
import JsonData from './StudentsData.json';

function App() {

  const [StudentData, setStudentData] = useState([]);
    useEffect(()=>{
        console.log(JsonData);
        setStudentData(JsonData);
      },[]);

  return (
    <BrowserRouter>
    <StudentContext.Provider value={{StudentData, setStudentData}}>
    <div className="App">
      <nav>
      <Link to="/">Student List</Link>
      </nav>
    <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/detail/:id" element={<StudentDetail />} />
        </Routes>
      {/* <StudentList />
      <StudentDetail /> */}
    </div>
    </StudentContext.Provider>
    </BrowserRouter>
  );
}

export default App;
