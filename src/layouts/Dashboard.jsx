import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Categories from './Categories'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'
import JobAdvertisementConfirm from '../pages/JobAdvertisementConfirm'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route exact path="/jobAdvertisements" component={JobAdvertisementList} />
                        <Route exact path="/jobAdvertisement/:id" component={JobAdvertisementDetail} />
                        <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd} />
                        <Route exact path="/jobAdvertisementConfirm" component={JobAdvertisementConfirm}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
