import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item 
                        name='HRMS'
                    />
                    <Menu.Item
                        name='Job Advertisements'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button color='orange'>Sign In</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button color='orange'>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
