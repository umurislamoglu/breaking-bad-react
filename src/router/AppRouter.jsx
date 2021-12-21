import React from 'react'
import {  Route, Switch } from "react-router-dom";
import List from '../pages/List'
import Detail from '../pages/Detail'

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path = "/" component= {List}/>
            <Route  exact path="/:name" component={Detail}/>
            <Route path = "*" component= {NotFound}/>


        </Switch>
    )
}

export default AppRouter
