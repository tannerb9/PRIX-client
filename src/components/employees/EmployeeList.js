import React, { useEffect, useState } from "react";
import Employee from "./Employee";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    if (props.currentUser.company.id !== 0) {
      fetch(
        `http://localhost:8000/employee?company=${props.currentUser.company.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "PRIX_token"
            )}`,
          },
        }
      )
        .then((response) => response.json())
        .then((companyEmployees) => {
          setEmployees(companyEmployees);
        });
    }
  };

  useEffect(getEmployees, [props.currentUser]);

  return (
    <article className="employeeList">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </article>
  );
};

export default EmployeeList;
