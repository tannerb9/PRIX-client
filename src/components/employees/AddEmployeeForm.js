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

const AddEmployeeForm = (props) => {
  const [modal, setModal] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const isAdmin = useRef();

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const newEmployee = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
      is_admin: isAdmin.current.value,
    };

    DataManager.post("employee", newEmployee).then(() => {
      props.getEmployees();
      toggle();
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button onClick={toggle}>Add Employee</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Form onSubmit={handleAddEmployee} id="add-employee-form">
            <FormGroup>
              <Label for="first-name">First Name</Label>
              <Input
                type="text"
                innerRef={firstName}
                name="first-name"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label for="last-name">Last Name</Label>
              <Input
                type="text"
                innerRef={lastName}
                name="last-name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                innerRef={username}
                name="username"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="text"
                innerRef={password}
                name="password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                innerRef={email}
                name="email"
                required
              />
            </FormGroup>
            <fieldset>
              <label htmlFor="isAdmin">Admin?</label>
              <select id="isAdmin" ref={isAdmin}>
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
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddEmployeeForm;
