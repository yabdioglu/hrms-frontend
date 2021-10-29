import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import EmployerService from '../../services/EmployerService';

class SignupForEmployer extends React.Component {
    state = {
        email: null,
        password: null,
        confirmPassword: null,
        companyName: null,
        phoneNumber: null,
        webAddress: null,
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickSignup = event => {
        const { email, password, confirmPassword, companyName, phoneNumber, webAddress } = this.state;
        let employerService = new EmployerService();

        const body = {
            email,
            password,
            confirmPassword,
            companyName,
            phoneNumber,
            webAddress
        };

        employerService.registerEmployer(body);
    };

    render() {
        return (
            <div>
                <Segment>
                    <Form size='large'>
                        <Form.Input
                            fluid
                            icon='building'
                            iconPosition='left'
                            placeholder='Company Name'
                            name="companyName"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='phone'
                            iconPosition='left'
                            placeholder='Phone Number'
                            name="phoneNumber"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='globe'
                            iconPosition='left'
                            placeholder='Web Address'
                            name="webAddress"
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

export default SignupForEmployer;
