import React from 'react';
import { Grid, Header, Segment, Radio, GridColumn } from 'semantic-ui-react'
import SignupForCandidate from './signup/SignupForCandidate'
import SignupForEmployer from './signup/SignupForEmployer';
import SignupPageForEmployee from './signup/SignupForEmployee';

class UserSignupPage extends React.Component {
    state = {
        value: "0"
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleChange = (e, { value }) => this.setState({ value })

    renderSwitch(param) {
        switch (param) {
            case '0':
                return <SignupForCandidate />;
            case '1':
                return <SignupForEmployer onChange={this.onChange} onClickSignup={this.onClickSignup} />
            case '2':
                return <SignupPageForEmployee onChange={this.onChange} onClickSignup={this.onClickSignup} />
            default:
                return 'foo';
        }
    }

    render() {

        const { value } = this.state;
        return (

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='orange' textAlign='center'>
                        Sign Up
                    </Header>

                    <Segment.Group >
                        <Segment compact color="orange">
                            <Grid stackable centered columns="3" >
                                <GridColumn >
                                    <Radio
                                        color='primary'
                                        label='Candidate'
                                        name='radioGroup'
                                        value='0'
                                        checked={this.state.value === '0'}
                                        onChange={this.handleChange}
                                    />
                                </GridColumn>
                                <GridColumn >
                                    <Radio
                                        label='Employer'
                                        name='radioGroup'
                                        value='1'
                                        checked={this.state.value === '1'}
                                        onChange={this.handleChange}
                                    />
                                </GridColumn>
                                <GridColumn >
                                    <Radio
                                        style={{ color: 'red' }}
                                        label="Employee"
                                        name='radioGroup'
                                        value='2'
                                        checked={this.state.value === '2'}
                                        onChange={this.handleChange}
                                    >
                                    </Radio>
                                </GridColumn>
                            </Grid>
                        </Segment>
                         {this.renderSwitch(value)}
                        {/* {value === "1" ? (<SignupPageForEmployer onChange={this.onChange} onClickSignup={this.onClickSignup} />) : (<SignupPageForCandidate onChange={this.onChange} onClickSignup={this.onClickSignup} />)} */}
                    </Segment.Group>


                </Grid.Column>

            </Grid>

        );
    };
};




export default UserSignupPage;