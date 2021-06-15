import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthhenticated, setIsAuthhenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthhenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthhenticated(true)

    }
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/"
                        name='HRMS'
                    />
                    <Menu.Item as={NavLink} to="/jobAdvertisements"
                        name='Job Advertisements'
                    />
                    <Menu.Menu position='right'>
                        {isAuthhenticated ? <SignedIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
