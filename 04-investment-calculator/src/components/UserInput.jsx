import { calculateInvestmentResults, formatter } from '../util/investment';

import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInput = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label id='user-label'>Initial Investments</label>
          <input
            value={userInput}
            type='number'
            required
            onChange={(e) =>
              handleUserInput('initialInvestment', e.target.value)
            }
          />
        </p>
        <p>
          <label id='user-label'>ANNUAL INVESTMENTS</label>
          <input
            value={userInput}
            type='number'
            required
            onChange={(e) =>
              handleUserInput('annualInvestment', e.target.value)
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label id='user-label'>Expected Return</label>
          <input
            value={userInput}
            type='number'
            required
            onChange={(e) => handleUserInput('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label id='user-label'>Duration</label>
          <input
            value={userInput}
            type='number'
            required
            onChange={(e) => handleUserInput('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
