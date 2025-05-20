import Button from '../ui/Button';
import Input from '../ui/Input';
import { styled } from 'styled-components';
import { useState } from 'react';
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id='auth-inputs'>
      <ControlContainer>
        <Input
          invalid={emailNotValid}
          label={'Email'}
          type='email'
          onChange={(event) =>
            handleInputChange('email', event.target.value)
          }></Input>
        <Input
          invalid={passwordNotValid}
          label={'Password'}
          type='password'
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }></Input>
      </ControlContainer>
      <div className='actions'>
        <button
          type='button'
          className='text-button'>
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
