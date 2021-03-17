import React from 'react';
import { connect } from 'react-redux';
import EmployeeItem from './EmployeeItem';


class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees: props.employees, 
            filteredEmployees: [],
            filters: [
                {
                    name: 'Low-salary',
                    checked: false
                },
                {
                    name: 'Reasonable-salary',
                    checked: false
                },
                {
                    name: 'High-salary',
                    checked: false
                }
            ]
        }
    }

    checkBoxValue(name) {
        const Filter =  this.state.filters.find(filter => filter.name === name);
        return Filter.checked;
    }

    handleCheckboxChange(name) {
        const filters = this.state.filters;

        const updatedF = filters.map((filter) => {
            if(filter.name === name) {
                if(filter.checked){
                     return{ 
                         ...filter,
                         checked: false
                     }
                   }else {
                         return {
                             ...filter,
                           checked:true
                        }
                }
            } else if(filter.name !== name && filter.checked) {
                return{
                    ...filter,
                    checked:false
                }
            }else {
                return filter;
            }
        });
        this.setState({filters:updatedF});
    }

    filterEmployeeList(down, up){
        const filteredEmpl = this.state.employees.filter((employee) => {
           // console.log(employee);
             return employee.salary >= down && employee.salary < up;
        });
        this.setState({filteredEmployees: filteredEmpl});
    }

    displayEmployees(event, downLimit, upLimit){
        if(event.target.checked){
            this.filterEmployeeList(downLimit, upLimit);
        }else {
            this.filterEmployeeList(0, Infinity);
        }
        this.handleCheckboxChange(event.target.name);
    }
    orderNameOrSalary(value){
        let empOrdered = this.state.employees;
        
        if(value==="salary"){
            empOrdered.sort((employee1,employee2)=>employee1.salary - employee2.salary)
        }
        if(value==="firstName"){
            empOrdered.sort(function (employee1,employee2)  {

                if(employee1.firstName > employee2.firstName){
                    return 1;
                }
                else if(employee1.firstName < employee2.firstName){
                    return -1;
                }
                
               return 0;

                }
            )
        }

        this.setState({employees:empOrdered})
    }

  
    
    render(){

        return (
            <div className="row">
            <div className="col-6 col-md-2 d-flex flex-column">
             <h4>Sort by</h4>
            <button className="btn btn-primary my-3 ml-2" onClick={()=>this.orderNameOrSalary("firstName")}>Name</button>
            <button className="btn btn-primary ml-2 " onClick={()=>this.orderNameOrSalary("salary")}>Salary</button>

            <h4>Filter Salary</h4>
                <div>

                    <div>
                        <label className="mr-2" htmlFor="Low-salary"> &lt; 2500lei</label>
                        <input type="checkbox" id="Low-salary" name="Low-salary" value="0-2500" 
                         checked={this.checkBoxValue("Low-salary")}
                         onChange={(e) => this.displayEmployees(e, 0, 2500)}/>
                    </div>
                    <div>
                        <label className="mr-2" htmlFor="Reasonable-salary">2500-4000 lei</label>
                        <input type="checkbox" id="Reasonable-salary" name="Reasonable-salary" value="2500-4000" 
                         checked={this.checkBoxValue('Reasonable-salary')}
                         onChange={(e) => this.displayEmployees(e, 2500, 4000)}/>
                    </div>
                    <div>
                        <label className="mr-2" htmlFor="High-salary">&gt; 4000 lei</label>
                        <input type="checkbox" id="High-salary" name="High-salary" value="4000-100000"
                          checked={this.checkBoxValue('High-salary')}
                         onChange={(e) => this.displayEmployees(e, 4000, Infinity)}/>
                    </div>
                
                </div>


            </div>
             
             <div className="col-10 col-md-10">
             {this.state.employees.map((employee)=>{
                 return (
                 <EmployeeItem {...employee} />
                 )
             })}
             </div>
         </div>
        )
    }
}

function mapStateToProps(state){
    return {
        employees: state.employees
    }
}
export default connect(mapStateToProps)(EmployeeList);
