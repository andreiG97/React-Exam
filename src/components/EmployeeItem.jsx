import React from 'react'

function EmployeeItem(props) {
    const { firstName, lastName, salary, job, date } = props;
    return (
        <div>
            <ul className="list-group mt-5">
                <li className="list-group-item mt-2">{firstName}</li>
                <li className="list-group-item mt-2">{lastName}</li>
                <li className="list-group-item mt-2">{job}</li>
                <li className="list-group-item mt-2">{salary}</li>
                <li className="list-group-item mt-2">{date}</li>
            </ul>
        </div>
    )
}

export default EmployeeItem
