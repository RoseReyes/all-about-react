import QUESTIONS from '../questions.js';
import { useState } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const randomAnswer = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );

  const handleSelectAnswer = () => {};

  return (
    <div id='question'>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li
            key={answer}
            className='answer'>
            <button onClick={handleSelectAnswer}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
