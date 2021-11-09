import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { employerSignup } from '../../api/apiCalls'

class SignupForEmployer extends React.Component {
    state = {
        email: null,
        password: null,
        confirmPassword: null,
        companyName: null,
        phoneNumber: null,
        webAddress: null,
        pendingApiCall: false,
        errors : {}
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
        const { email, password, confirmPassword, companyName, phoneNumber, webAddress } = this.state;

        const body = {
            email,
            password,
            confirmPassword,
            companyName,
            phoneNumber,
            webAddress
        };

        this.setState({ pendingApiCall: true });

        try {
            const response = await employerSignup(body);
        } catch (error) {
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors})
            }
        }

        this.setState({ pendingApiCall: false });
    };

    render() {
        const { pendingApiCall, errors } = this.state;
        const { email, companyName, phoneNumber, webAddress, confirmPassword, password} = errors;
        return (
            <div>
                <Segment>
                    <Form size='large'>
                        <Form.Input
                            fluid icon='building'
                            iconPosition='left' placeholder='Company Name'
                            name="companyName" onChange={this.onChange}
                            error={companyName}
                        />
                        <Form.Input
                            fluid icon='phone'
                            iconPosition='left'placeholder='Phone Number'
                            name="phoneNumber" onChange={this.onChange}
                            error={phoneNumber}
                        />
                        <Form.Input
                            fluid icon='globe'
                            iconPosition='left' placeholder='Web Address'
                            name="webAddress" onChange={this.onChange}
                            error={webAddress}
                        />
                        <Form.Input
                            fluid icon='mail'
                            iconPosition='left' placeholder='E-mail address'
                            name="email" onChange={this.onChange}
                            error={email}
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

                        <Button color="orange"
                            fluid size='large'
                            onClick={this.onClickSignup} 
                            disabled={pendingApiCall || confirmPassword!= undefined}
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

export default SignupForEmployer;
