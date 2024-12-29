import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css'; // Keep library styles
import styles from './Heatmap.module.css'; // Import modular CSS

const today = new Date();

function App2() {
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  return (
    <div className={styles.container}>
      <h1>react-calendar-heatmap demos</h1>
      <p>Random values with onClick and react-tooltip</p>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return styles.colorEmpty;
          }
          return styles[`colorGithub${value.count}`];
        }}
        tooltipDataAttrs={value => ({
          'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count}`,
        })}
        showWeekdayLabels={true}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App2 />, rootElement);
