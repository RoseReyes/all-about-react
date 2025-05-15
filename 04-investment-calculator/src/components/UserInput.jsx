export default function UserInput({ userInput, onChange }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label id='user-label'>Initial Investments</label>
          <input
            value={userInput.initialInvestment}
            type='number'
            required
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label id='user-label'>ANNUAL INVESTMENTS</label>
          <input
            value={userInput.annualInvestment}
            type='number'
            required
            onChange={(e) => onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label id='user-label'>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            type='number'
            required
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label id='user-label'>Duration</label>
          <input
            value={userInput.duration}
            type='number'
            required
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
