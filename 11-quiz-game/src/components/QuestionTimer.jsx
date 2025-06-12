import { useEffect } from 'react';
import { useState } from 'react';

export const QuestionTimer = ({ timeOut, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    setTimeout(onTimeout, timeOut);
  }, [timeOut, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress
      id='question-time'
      max={timeOut}
      value={remainingTime}
    />
  );
};
