import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item
                    name='candidates'
                >
                    <Icon name='users' />
                    Candidates
                </Menu.Item>
                <Menu.Item
                    name='employers'
                >
                    <Icon name='building outline' />
                    Employers
                </Menu.Item>
                <Menu.Item as={NavLink} to="/jobAdvertisements"
                    name='jobadvertisements'
                >
                    <Icon name='announcement' />
                    Job Advertisements
                </Menu.Item>
                <Menu.Item
                    name='jobtitles'
                >
                    <Icon name='briefcase' />
                    Job Titles
                </Menu.Item>
            </Menu>
        </div >
    )
}
