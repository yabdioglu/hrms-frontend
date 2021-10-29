import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import CandidateService from '../../services/CandidateService';

class SignupForCandidate extends React.Component {
    state = {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        identityNumber: null,
        birthYear: null
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickSignup = event => {
        const { email, password, confirmPassword, firstName, lastName, identityNumber, birthYear } = this.state;
        let candidateService = new CandidateService();

        const body = {
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            identityNumber,
            birthYear
        };

        candidateService.registerCandidate(body);
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
                            icon='id card'
                            iconPosition='left'
                            placeholder='Identity Number'
                            name="identityNumber"
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='calendar alternate'
                            iconPosition='left'
                            placeholder='Birth Year'
                            name="birthYear"
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

export default SignupForCandidate;
