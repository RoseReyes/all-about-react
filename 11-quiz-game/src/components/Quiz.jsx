import QUESTIONS from '../questions.js';
import { QuestionTimer } from './QuestionTimer.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TIMER = 10000;

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img
          src={quizCompleteImg}
          alt='Trophy Icon'
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
        <QuestionTimer
          key={activeQuestionIndex}
          timeOut={TIMER}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => (
            <li
              key={answer}
              className='answer'>
              <button onClick={handleSelectAnswer}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
