import React from "react";
import EditEmployeeForm from "./EditEmployeeForm";

const Employee = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.employee.user.first_name}</th>
        <td>{props.employee.user.last_name}</td>
        <td>{props.employee.is_admin ? "Yes" : "No"}</td>
        <td>{props.employee.user.email}</td>
        <td>
          <EditEmployeeForm
            key={`button-${props.employee.id}`}
            user={props.user}
            employeeId={props.employee.id}
            isAdmin={props.isAdmin}
            getEmployees={props.getEmployees}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Employee;
