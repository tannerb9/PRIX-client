import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import AddEmployeeForm from "./AddEmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";
import DataManager from "../../api/DataManager";
import { Table } from "reactstrap";
// import "../List.css";

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
      <Table hover striped size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            user={employee.user}
            employeeId={employee.id}
            isAdmin={employee.is_admin}
            getEmployees={getEmployees}
          />
        ))}
      </Table>
    </article>
  );
};

export default EmployeeList;
