import { useCallback, useState } from 'react';

import QUESTIONS from '../questions.js';
import { Question } from './Question.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

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

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkiAnswer={handleSkipAnswer}
      />
    </div>
  );
};
