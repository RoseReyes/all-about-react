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
      <ResultTable input={userInput} />
    </>
  );
}

export default App;
