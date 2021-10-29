import React from 'react'
import { Route, Switch } from 'react-router-dom'
import JobAdvertisementList from '../pages/jobAdvertisement/JobAdvertisementList'
import JobAdvertisementDetail from '../pages/jobAdvertisement/JobAdvertisementDetail'
import JobAdvertisementAdd from '../pages/jobAdvertisement/JobAdvertisementAdd'
import JobAdvertisementConfirm from '../pages/jobAdvertisement/JobAdvertisementConfirm'
import { ToastContainer } from 'react-toastify'
import CurriculumVitae from '../pages/CurriculumVitae';
import UserSignupPage from '../pages/UserSignupPage';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
                        <Switch>
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route  path="/jobAdvertisements" component={JobAdvertisementList} />
                        <Route  path="/jobAdvertisement/:id" component={JobAdvertisementDetail} />
                        <Route  path="/jobAdvertisementAdd" component={JobAdvertisementAdd} />
                        <Route  path="/jobAdvertisementConfirm" component={JobAdvertisementConfirm} />
                        <Route  path="/curriculumVitae" component={CurriculumVitae} />
                        <Route  path="/signup" component={UserSignupPage} />
                        </Switch>
        </div>
    )
}
