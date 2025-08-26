import { hasMinLength, isEmail, isNotEmpty } from '../util/validation.js';

import Input from './Input';
import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = hasMinLength(enteredValues.password, 6);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((preValues) => ({
      ...preValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
      <div></div>
    </form>
  );
}
