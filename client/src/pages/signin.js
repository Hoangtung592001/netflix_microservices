import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../components';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { validateEmail, validatePassword } from '../utils/validate';
import { raiseAlert } from '../redux/actions/alertAction';
import { signIn } from '../redux/actions/authAction';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const { alert, auth } = useSelector(state => state);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
    event.preventDefault();
    if (!validateEmail(emailAddress)) {
      dispatch(raiseAlert('Please enter a valid email address'));
    }
    else {
      dispatch(signIn({
        email: emailAddress,
        password: password
      }))
    }
  };

  useEffect(() => {
    if (alert.success) {
      navigate(ROUTES.BROWSE);
    }
  }, [alert.success, navigate])

  return (
    <>
      <HeaderContainer buttonShow={false} bg={true}>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {alert.error && <Form.Error>{alert.error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.InputField>
              <Form.Input
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Placeholder>Email address</Form.Placeholder>
            </Form.InputField>
            <Form.InputField>
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Placeholder>Password</Form.Placeholder>
            </Form.InputField>
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}