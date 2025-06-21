import { useCallback, useRef, useState } from 'react';

import QUESTIONS from '../questions.js';
import { QuestionTimer } from './QuestionTimer.jsx';
import questions from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

const TIMER = 10000;

export const Quiz = () => {
  const shuffledAnswers = useRef();
  const [answerState, setAnswerState] = useState('unanswered');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random - 0.5);
  }

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
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = '';

            if (answerState === 'answered' && isSelected) {
              cssClasses = 'selected';
            }

            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              isSelected
            ) {
              cssClasses = answerState;
            }

            return (
              <li
                key={answer}
                className='answer'>
                <button
                  onClick={handleSelectAnswer}
                  className={cssClasses}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
