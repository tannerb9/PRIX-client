import React, { useRef, useState } from "react";
import DataManager from "../../api/DataManager";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
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

    let adminStatus = isAdmin.current.value;

    if (isAdmin.current.value === props.isAdmin) {
      adminStatus = props.isAdmin;
    }

    const editedEmployee = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      is_admin: adminStatus,
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

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <>
      <Button className="edit-btn" onClick={toggle}>
        Edit Employee
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {props.user.first_name} {props.user.last_name}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleEditEmployee} id="edit-employee-form">
            <FormGroup>
              <Label for="first-name">First Name</Label>
              <Input
                type="text"
                innerRef={firstName}
                defaultValue={props.user.first_name}
                name="first-name"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label for="last-name">Last Name</Label>
              <Input
                type="text"
                defaultValue={props.user.last_name}
                innerRef={lastName}
                name="last-name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                defaultValue={props.user.email}
                innerRef={email}
                name="email"
                required
              />
            </FormGroup>
            <fieldset>
              <label htmlFor="isAdmin">Admin?</label>
              <select id="isAdmin" ref={isAdmin}>
                <option
                  value={props.isAdmin}
                  key={`isAdmin--${props.isAdmin}`}
                >
                  {props.isAdmin ? "Yes" : "No"}
                </option>
                {props.isAdmin !== true ? (
                  <option value={1} key={"true"}>
                    Yes
                  </option>
                ) : (
                  <option value={0} key={"false"}>
                    No
                  </option>
                )}
              </select>
            </fieldset>
            <Button type="submit">Submit</Button>
            <Button onClick={handleDeleteEmployee}>Delete</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditEmployeeForm;
