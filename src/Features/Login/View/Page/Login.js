import React, { Component } from "react";

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

class Login extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
          <Form>
            <FormGroup row>
              <Label for="lblEmail" sm={4} className="text-muted">Email</Label>
              <Col sm={8}>
              <Input
                type="email"
                name="txtEmail"
                id="txtEmail"
                placeholder="Username"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lblPassword" sm={4} className="text-muted">Password</Label>
              <Col sm={8}>
              <Input
                type="password"
                name="txtPassword"
                id="txtPassword"
                placeholder="Password"
              />
              </Col>
            </FormGroup>
            <Button>Login</Button>
          </Form>
          <Nav>
        <NavItem>
          <NavLink href="#">Create an account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Forgot</NavLink>
        </NavItem>
        
      </Nav>
          </Jumbotron>
      </div>
    );
  }
}

export default Login;