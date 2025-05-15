import Header from './components/Header.jsx';
import { ResultTable } from './components/ResultTable.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValidDuration = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChange={handleChange}
      />
      {!inputIsValidDuration && (
        <p className='center'>Please enter a duration more than 0</p>
      )}
      {inputIsValidDuration && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
