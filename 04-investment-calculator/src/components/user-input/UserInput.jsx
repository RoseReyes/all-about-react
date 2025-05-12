export default function UserInput() {
  return (
    <>
      <div id='user-input'>
        <div class='input-group'>
          <label id='user-label'>INITIAL INVESTMENTS</label>
          <label id='user-label'>ANNUAL INVESTMENTS</label>
        </div>
        <div class='input-group'>
          <input type='number' />
          <input type='number' />
        </div>
        <div class='input-group'>
          <label id='user-label'>EXPECTED RETURNS</label>
          <label id='user-label'>DURATION</label>
        </div>
        <div class='input-group'>
          <input type='number' />
          <input type='number' />
        </div>
      </div>
    </>
  );
}
