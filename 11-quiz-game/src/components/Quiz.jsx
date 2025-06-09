import QUESTIONS from '../questions.js';
import { QuestionTimer } from './QuestionTimer.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';
import { useEffect } from 'react';
import { useState } from 'react';

const TIMER = 15000;

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSelectAnswer();
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img
          src={quizCompleteImg}
          alt='Quiz Completed!'
        />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => (
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
      <QuestionTimer timer={TIMER} />
    </div>
  );
};

export default Quiz;
