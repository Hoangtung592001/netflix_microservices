import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse, Watch } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { refreshToken } from './redux/actions/authAction';

function App() {
  const { auth, user } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.SIGN_UP} element={
          <IsUserRedirect user={auth.accessToken} LoggedInElement={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
        }/>
        <Route exact path={ROUTES.HOME} element={
          <IsUserRedirect user={auth.accessToken} LoggedInElement={ROUTES.BROWSE}>
            <Home />
          </IsUserRedirect>
        }/>
        <Route exact path={ROUTES.SIGN_IN} element={
          <IsUserRedirect user={auth.accessToken} LoggedInElement={ROUTES.BROWSE}>
            <SignIn />
          </IsUserRedirect>
        }/>
        <Route exact path={ROUTES.BROWSE} element={
            <ProtectedRoute user={auth.accessToken}>
              <Browse />
            </ProtectedRoute>
        }
        />
        {auth.accessToken ? 
          <Route exact path={ROUTES.WATCH} element={
            <Watch />
          }
          />
          : null
        }
      </Routes>
    </Router>
  );
}

export default App;
