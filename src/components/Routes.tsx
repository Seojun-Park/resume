import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AllProjects, Home, Profile, Project } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/project/:title" component={Project} />
    </Switch>
)

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default AppRouter