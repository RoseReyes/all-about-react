import { calculateInvestmentResults, formatter } from '../util/investment';

import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label id='user-label'>Initial Investments</label>
          <input
            type='number'
            required
            handleUserInput
          />
        </p>
        <p>
          <label id='user-label'>ANNUAL INVESTMENTS</label>
          <input
            type='number'
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label id='user-label'>Expected Return</label>
          <input
            type='number'
            required
          />
        </p>
        <p>
          <label id='user-label'>Duration</label>
          <input
            type='number'
            required
          />
        </p>
      </div>
    </section>
  );
}
