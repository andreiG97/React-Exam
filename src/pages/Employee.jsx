import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeList from '../components/EmployeeList';




function Employee(props) {
    console.log(props);
    return (
        <div>
        
            <div>
              
                <EmployeeList/> 
                
            </div>
             <Link to="/">
                <button className="btn btn-secondary">Home</button>
            </Link>
        </div>
    )
}



export default Employee;
