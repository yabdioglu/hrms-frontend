import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button style={{ marginRight: "0.5em" }} as={NavLink} to={`/jobAdvertisementAdd`} color='yellow'>Add Job Ad</Button>
                <Button onClick={signIn} color='orange'>Sign In</Button>
                <Button color='orange' style={{ marginLeft: "0.5em" }}>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
