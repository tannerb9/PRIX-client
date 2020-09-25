import React, { useRef, useState } from "react";
import DataManager from "../../api/DataManager";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";

const EditEmployeeForm = (props) => {
  const [modal, setModal] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const isAdmin = useRef();

  const handleEditEmployee = (e) => {
    e.preventDefault();

    const editedEmployee = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      is_admin: isAdmin.current.value,
    };

    DataManager.put("employee", props.employeeId, editedEmployee).then(
      () => {
        props.getEmployees();
        toggle();
      }
    );
  };

  const handleDeleteEmployee = () => {
    DataManager.delete("employee", props.employeeId).then(() => {
      props.getEmployees();
      toggle();
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button onClick={toggle}>Edit Employee</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Form onSubmit={handleEditEmployee} id="edit-employee-form">
            <FormGroup>
              <Label for="first-name">First Name</Label>
              <Input
                type="text"
                innerRef={firstName}
                defaultValue={props.employee.first_name}
                name="first-name"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label for="last-name">Last Name</Label>
              <Input
                type="text"
                defaultValue={props.employee.last_name}
                innerRef={lastName}
                name="last-name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                defaultValue={props.employee.email}
                innerRef={email}
                name="email"
                required
              />
            </FormGroup>
            <fieldset>
              <label htmlFor="isAdmin">Admin?</label>
              <select
                id="isAdmin"
                defaultValue={props.isAdmin}
                ref={isAdmin}
              >
                <option value={1} key={"true"}>
                  Yes
                </option>
                <option value={0} key={"false"}>
                  No
                </option>
              </select>
            </fieldset>
            {/* <FormGroup tag="fieldset">
              <legend>Admin?</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value={true} /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio2"
                    innerRef={isAdmin}
                    value={false}
                    defaultChecked
                  />{" "}
                  No
                </Label>
              </FormGroup>
            </FormGroup> */}
            <Button type="submit">Submit</Button>
            <Button onClick={handleDeleteEmployee}>Delete</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditEmployeeForm;
