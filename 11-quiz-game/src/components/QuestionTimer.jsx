import { useEffect } from 'react';
import { useState } from 'react';

export const QuestionTimer = ({ timeOut, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log('SET TIMEOUT');
    const timer = setTimeout(onTimeout, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeout]);

  useEffect(() => {
    console.log('SET INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id='question-time'
      max={timeOut}
      value={remainingTime}
      className={mode}
    />
  );
};
