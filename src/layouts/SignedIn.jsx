import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
                <Dropdown pointing="top left" text="Yıldıray">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My information" icon="info" />
                        <Dropdown.Item as={NavLink} to="/curriculumVitae" text="My CV" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
