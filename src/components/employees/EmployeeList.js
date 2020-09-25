import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import AddEmployeeForm from "./AddEmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";
import DataManager from "../../api/DataManager";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    DataManager.getAll("employee").then((companyEmployees) => {
      setEmployees(companyEmployees);
    });
  };

  useEffect(getEmployees, []);

  return (
    <article className="employeeList">
      <AddEmployeeForm {...props} getEmployees={getEmployees} />
      {employees.map((employee) => (
        <>
          <Employee key={employee.id} employee={employee} />
          <EditEmployeeForm
            key={`button-${employee.id}`}
            employee={employee.user}
            employeeId={employee.id}
            isAdmin={employee.is_admin}
            getEmployees={getEmployees}
          />
        </>
      ))}
    </article>
  );
};

export default EmployeeList;
