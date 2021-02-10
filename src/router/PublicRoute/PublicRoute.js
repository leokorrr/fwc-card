import React from 'react'
import {Route} from 'react-router-dom'

export const PublicRoute = ({ component: Component, layout: Layout }) => (
    <Route render={props => (
        <Layout location={props} component={Component}/>
    )} />
)
