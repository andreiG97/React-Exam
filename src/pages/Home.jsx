import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmployee } from '../redux/actions/formAction';



class Home extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            firstName: '',
            lastName: '',
            job: '',
            salary:0,
            date:''
        }
    }
    handleFirstName(event) {
        this.setState({firstName: event.target.value});
    }
    handleLastName(event) {
        this.setState({lastName: event.target.value});
    }
    handleJob(event) {
        this.setState({job: event.target.value});
    }
    handleSalary(event) {
        this.setState({salary: event.target.value});
    }
    handleDate(event) {
        this.setState({date: event.target.value});
    }

    componentDidMount(){
        let date= new Date();
        let day = date.getDay().toString();
        let month = date.getMonth().toString();
        let year = date.getFullYear().toString();
        let dateFormat = day + "-" + month + "-" +year;
        this.setState({date:dateFormat})
    }
    
    render(){
        const {firstName, lastName, job, salary, date} = this.state;
        let employee = {
            firstName,
            lastName,
            job,
            salary,
            date
        }

        return (
            <div className="">
                <div className="d-flex justify-content-center">
                    <form onSubmit={(event) => 
                        { event.preventDefault()
                            this.props.addEmployee(employee)
                        }
                    }>
                        <p className="h4 text-center py-4">Personal Information</p>
                        <label className="grey-text font-weight-light mt-2" htmlFor="firstName">FirstName</label>
                        <input  className="form-control " type="text" id="firstName" required onChange={(event) => this.handleFirstName(event)}/>
    
                        <label className="grey-text font-weight-light mt-2" htmlFor="LastName">LastName</label>
                        <input  className="form-control " type="text" id="LastName" required onChange={(event) => this.handleLastName(event)}/>
    
                        <label className="grey-text font-weight-light mt-2" htmlFor="job">Job Title</label>
                        <input  className="form-control " type="text" id="job" required onChange={(event) => this.handleJob(event)}/>
    
                        <label className="grey-text font-weight-light mt-2" htmlFor="salary">Salary</label>
                        <input  className="form-control " type="number" id="salary" required onChange={(event) => this.handleSalary(event)}/>
    
                        <label className="grey-text font-weight-light mt-2" htmlFor="date-of-employment">Data angajarii</label>
                        <input  className="form-control " type="date" id="date-of-employment" value={date} readOnly onChange={(event) => this.handleDate(event)}/>
    
                        <button className="btn btn-secondary mt-2 w-50" type="submit">Submit</button>
                    </form>
                </div>
                 <Link to="/employees">
                    <button className="btn btn-secondary mt-2 w-25">Employees</button>
                </Link>
            </div>
        )
    }
    }

    function mapStateToProps(state) {
        return {
            employees: state.employees
        };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            addEmployee: (payload) => dispatch(addEmployee(payload))
        };
    }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
