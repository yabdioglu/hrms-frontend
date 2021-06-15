import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} color='orange'>Giriş Yap</Button>
                <Button color='orange' style={{marginLeft: "0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
