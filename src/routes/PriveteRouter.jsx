import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const PriveteRouter = ({auth, component: Component, ...rest}) => {
    return  <Route {...rest} component={(props) =>  auth.log ? <Component {...props} />: <Redirect to="/login"/> } />

}

export default PriveteRouter
