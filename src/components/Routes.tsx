import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AllProjects } from '../Routes'
import lodable from '@loadable/component'

const Home = lodable(() => import('../Routes/Home/Home'))
const Profile = lodable(() => import('../Routes/Profile/Profile'))
const Project = lodable(() => import('../Routes/Project/Project'))
const Contact = lodable(() => import('../Routes/Contact/Contact'))

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/project/:title" component={Project} />
        <Route path='/contact' component={Contact} />
    </Switch>
)

const AppRouter: React.VFC = () => {
    return (
        <BrowserRouter basename={`/`}>
            <Routes />
        </BrowserRouter>
    )
}

export default AppRouter