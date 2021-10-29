import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import EmployeeService from '../../services/EmployeeService';

class SignupForEmployee extends React.Component {
    state = {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickSignup = event => {
        const { email, password, confirmPassword, firstName, lastName } = this.state;
        let employeeService = new EmployeeService();

        const body = {
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
        };

        employeeService.registerEmployee(body);
    };

    render() {
        return (
            <div>
                <Segment>
                    <Form size='large'>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='First Name'
                            name="firstName"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='Last Name'
                            name="lastName"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='mail'
                            iconPosition='left'
                            placeholder='E-mail address'
                            name="email"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name="password"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password Repeat'
                            type='password'
                            onChange={this.onChange}
                            name="confirmPassword"
                        />

                        <Button primary color='teal' fluid size='large' onClick={this.onClickSignup}>
                            Sign Up
                        </Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default SignupForEmployee;
