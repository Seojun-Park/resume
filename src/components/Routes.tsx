import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AllProjects, Home, Profile, Project, Contact } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/project/:title" component={Project} />
        <Route path='/contact' component={Contact} />
    </Switch>
)

const AppRouter = () => {
    return (
        <BrowserRouter basename={`/resume/`}>
            {/* <BrowserRouter basename={`https://Seojun-Park.github.io/resume/`}> */}
            <Routes />
        </BrowserRouter>
    )
}

export default AppRouter