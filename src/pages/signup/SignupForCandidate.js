import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { candidateSignup } from '../../api/apiCalls'

class SignupForCandidate extends React.Component {
    state = {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        identityNumber: null,
        birthYear: null,
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const { name, value } = event.target;
        const errors = {...this.state.errors}
        errors[name] = undefined;
        if(name === 'password' || name ==='confirmPassword'){
            if(name === 'password' && value !== this.state.confirmPassword){
                errors.confirmPassword = 'Password mismatch'
            } else if(name === 'confirmPassword' && value !== this.state.password) {
                errors.confirmPassword = 'Password mismatch'
            } else {
                errors.confirmPassword = undefined;
            }
        }
        this.setState({
            [name]: value,
            errors
        });
    };

    onClickSignup = async event => {
        const { email, password, confirmPassword, firstName, lastName, identityNumber, birthYear } = this.state;

        const body = {
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            identityNumber,
            birthYear
        };
        this.setState({ pendingApiCall: true });

        try {
            const response = await candidateSignup(body);
        } catch (error) {
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors})
            }
        }

        this.setState({ pendingApiCall: false });
    };

    render() {
        const { pendingApiCall, errors } = this.state;
        const { email, firstName, lastName, password, confirmPassword, identityNumber,birthYear } = errors;
        return (
            <div>
                <Segment>
                    <Form size='large'>
                        <Form.Input
                            fluid icon='user'
                            iconPosition='left' placeholder='First Name'
                            name="firstName" onChange={this.onChange}
                            error={firstName}
                        />
                        <Form.Input
                            fluid icon='user'
                            iconPosition='left' placeholder='Last Name'
                            name="lastName" onChange={this.onChange}
                            error={lastName}
                        />
                        <Form.Input
                            fluid icon='id card'
                            iconPosition='left' placeholder='Identity Number'
                            name="identityNumber" onChange={this.onChange}
                            error={identityNumber}
                        />
                        <Form.Input
                            fluid icon='calendar alternate'
                            iconPosition='left' placeholder='Birth Year'
                            name="birthYear" onChange={this.onChange}
                            error={birthYear}
                        />
                        <Form.Input
                            fluid icon='mail'
                            iconPosition='left' placeholder='E-mail address'
                            name="email" onChange={this.onChange}
                            error= {email}
                        />
                        <Form.Input
                            fluid icon='lock'
                            iconPosition='left' placeholder='Password'
                            type='password' name="password"
                            onChange={this.onChange} error={password}
                            
                        />
                        <Form.Input
                            fluid icon='lock'
                            iconPosition='left' placeholder='Password Repeat'
                            type='password' onChange={this.onChange}
                            name="confirmPassword" error={confirmPassword}
                        />
                        <Button
                            color="orange" fluid
                            size='large' onClick={this.onClickSignup}
                            disabled={pendingApiCall || confirmPassword !== undefined}
                            loading={pendingApiCall}
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default SignupForCandidate;
