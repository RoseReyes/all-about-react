import QUESTIONS from '../questions.js';
import { useState } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswer = QUESTIONS[activeQuestionIndex].answers.sort(() => {
    return Math.random() - 0.5;
  });

  console.log(shuffledAnswer, 'answers');

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswer.map((answer) => (
            <li
              key={answer}
              className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
