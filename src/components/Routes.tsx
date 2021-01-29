import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Profile } from '../Routes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
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