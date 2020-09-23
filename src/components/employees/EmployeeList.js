import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import DataManager from "../../api/DataManager";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    DataManager.getAll("employee").then((companyEmployees) => {
      setEmployees(companyEmployees);
    });
  }, [props.currentUser]);

  return (
    <article className="employeeList">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </article>
  );
};

export default EmployeeList;
