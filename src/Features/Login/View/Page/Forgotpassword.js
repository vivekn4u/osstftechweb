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
  

class Forgotpassword extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
          <Form>
            <FormGroup row>
              <Label for="lblEmail" sm={4} className="text-muted">Username</Label>
              <Col sm={8}>
              <Input
                type="email"
                name="txtEmail"
                id="txtEmail"
                placeholder="Username"
              />
              </Col>
            </FormGroup>
            <Button>Send reaset password link</Button>
            </Form>
            </Jumbotron>
            </div>
        );
    }
}

export default Forgotpassword;