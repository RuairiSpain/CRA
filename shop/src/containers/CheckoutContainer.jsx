import React, {Component} from 'react'

import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Checkbox,
  Col
} from 'react-bootstrap';

export class CheckoutContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this
      .handleChange
      .bind(this);

    this.handleCgetValidationStatehange = this
      .getValidationState
      .bind(this);

    this.state = {
      name: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) 
      return 'success';
    else if (length > 5) 
      return 'warning';
    else if (length > 0) 
      return 'error';
    }
  
  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formCheckOut" validationState={this.getValidationState()}>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}/>
            <FormControl.Feedback/>
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox value={this.state.rememberMe} onChange={this.handleChange}>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default CheckoutContainer
