import React from 'react';
import { Navigate } from 'react-router';
import * as ROUTES from '../constants/routes';
export function IsUserRedirect({ user, LoggedInElement, children, ...restProps }) {
    return (
        user ? <Navigate to={LoggedInElement}/> : children
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    return(
        user ? children : <Navigate to={ROUTES.SIGN_IN}/>
    )
}