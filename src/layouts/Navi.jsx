import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Menu} from 'semantic-ui-react'

class Navi extends React.Component {

    
    render(){
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
                    {/* <Menu.Menu position='right'>
                        {isAuthhenticated ? <SignedIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}
                    </Menu.Menu> */}
                    <Menu.Item position='right'>
                        <Link className="nav-link" to="/signup">
                            Sign Up
                        </Link>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
}

export default Navi;
