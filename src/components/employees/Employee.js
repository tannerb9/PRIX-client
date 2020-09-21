import React from "react";

const Employee = (props) => {
  return (
    <section className="employee">
      <div className="employee-firstName">
        {props.employee.user.first_name}
      </div>
      <div className="employee-lastName">
        {props.employee.user.last_name}
      </div>
      <div className="employee-isAdmin">
        {props.employee.is_admin ? "Yes" : "No"}
      </div>
      <div className="employee-email">{props.employee.user.email}</div>
    </section>
  );
};

export default Employee;
