import React from 'react'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import List from '../pages/List'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path = "/" element= {<List/>}/>
            <Route  exact path="/:id" element={<Detail/>}/>
            <Route path = "*" element= {<NotFound/>}/>


        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
