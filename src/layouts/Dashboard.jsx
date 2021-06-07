import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import SideBar from './SideBar'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisementList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
