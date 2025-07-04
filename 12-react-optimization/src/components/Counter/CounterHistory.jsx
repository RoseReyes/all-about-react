import { log } from '../../log.js';
import { useState } from 'react';

const HistoryItem = ({ count }) => {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li
      onClick={handleClick}
      className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
};

export const CounterHistory = ({ history }) => {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem
          key={index}
          count={count}
        />
      ))}
    </ol>
  );
};
