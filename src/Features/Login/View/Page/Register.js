import React, { Component } from 'react';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
  

class Register extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <Form>
                <FormGroup row>
              <Label for="lblFirstname" sm={6} className="text-muted">First name</Label>
              <Col sm={6}>
              <Input
                type="text"
                name="txtFirstname"
                id="txtFirstname"
                placeholder="First name"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lblLastname" sm={6} className="text-muted">Last name</Label>
              <Col sm={6}>
              <Input
                type="text"
                name="txtLastname"
                id="txtLastname"
                placeholder="Last name"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lblEmail" sm={6} className="text-muted">Email</Label>
              <Col sm={6}>
              <Input
                type="email"
                name="txtEmail"
                id="txtEmail"
                placeholder="Username"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lblPassword" sm={6} className="text-muted">Password</Label>
              <Col sm={6}>
              <Input
                type="password"
                name="txtPassword"
                id="txtPassword"
                placeholder="password"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lblConfirmpassword" sm={6} className="text-muted">Confirm password</Label>
              <Col sm={6}>
              <Input
                type="password"
                name="txtConfirmpassword"
                id="txtConfirmpassword"
                placeholder="Confirm password"
              />
              </Col>
            </FormGroup>
            <Button>Register</Button>
          </Form>
                </Jumbotron>
            </div>
        );
    }
}

export default Register;