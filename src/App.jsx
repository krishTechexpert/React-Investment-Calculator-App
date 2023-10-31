import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 12,
    duration: 3,
  });
  function handleChange(name, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: +value,
      };
    });
  }
  const inputIsvalid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsvalid && (
        <p className="center">
          please enter valid duration value greater than 0
        </p>
      )}
      {inputIsvalid && <Results input={userInput} />}
    </>
  );
}

export default App;
