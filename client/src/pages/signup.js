import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userAction';
import { raiseAlert } from '../redux/actions/alertAction';
import * as ROUTES from '../constants/routes';
import { validateEmail, validatePassword } from '../utils/validate';

export default function SignUp() {
  // alert('Please enter your email');
  const firstNameRef = React.createRef();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const navigate = useNavigate();
  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const handleSignup = (event) => {
    event.preventDefault();
    if (!validateEmail(emailAddress)) {
      dispatch(raiseAlert('Please enter a valid email address'));
    }
    else if (!validatePassword(password)) {
      dispatch(raiseAlert('Please, Your password must contain at least 8 characters, one letter, one number and one special character'));
    }
    else {
      dispatch(addUser({
        firstName: firstName,
        email: emailAddress,
        password: password
      }));
    }
  };
  useEffect(() => {
    if (alert.success) {
      navigate(ROUTES.HOME);
    }
  }, [alert.success, navigate]);
  
  return (
    <>
      <HeaderContainer buttonShow={false} bg={true}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {alert.error && <Form.Error>{alert.error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.InputField>
              <Form.Input
                ref={firstNameRef}
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Placeholder>First Name</Form.Placeholder>
            </Form.InputField>
            <Form.InputField>
              <Form.Input
                ref={usernameRef}
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Placeholder>Email address</Form.Placeholder>
            </Form.InputField>
            <Form.InputField>
              <Form.Input
                ref={passwordRef}
                type="password"
                value={password}
                autoComplete="off"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Placeholder>Password</Form.Placeholder>
            </Form.InputField>
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
