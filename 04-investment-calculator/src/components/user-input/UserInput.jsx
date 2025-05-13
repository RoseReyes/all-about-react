import { calculateInvestmentResults, formatter } from '../../util/investment';

export default function UserInput() {
  const handleInput = (event) => {
    console.log(event.target.value, 'event object');
  };

  return (
    <>
      <div id='user-input'>
        <div className='input-group'>
          <label id='user-label'>INITIAL INVESTMENTS</label>
          <label id='user-label'>ANNUAL INVESTMENTS</label>
        </div>
        <div className='input-group'>
          <input
            type='number'
            onChange={(e) => handleInput(e)}
          />
          <input
            type='number'
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className='input-group'>
          <label id='user-label'>EXPECTED RETURNS</label>
          <label id='user-label'>DURATION</label>
        </div>
        <div className='input-group'>
          <input
            type='number'
            onChange={(e) => handleInput(e)}
          />
          <input
            type='number'
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
    </>
  );
}
