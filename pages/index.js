import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/time.calculator.module.css';

function TimeCalculator() {
  const [timeEntries, setTimeEntries] = useState([]);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [error, setError] = useState('');
  const [hourlyRate, setHourlyRate] = useState(''); // Default hourly rate (you can change this as needed)

  const addTimeEntry = () => {
    if (!hours && !minutes) {
      alert('Please enter hours or minutes');
      return;
    }

    const entryHours = hours ? parseInt(hours) : 0;
    const entryMinutes = minutes ? parseInt(minutes) : 0;
    const timeEntry = { hours: entryHours, minutes: entryMinutes };
    setTimeEntries([...timeEntries, timeEntry]);
    setHours('');
    setMinutes('');
    updateTotalTime(entryHours, entryMinutes);
    setError('');
  };

  const updateTotalTime = (entryHours, entryMinutes) => {
    const newTotalMinutes = totalHours * 60 + totalMinutes + entryHours * 60 + entryMinutes;
    const newTotalHours = Math.floor(newTotalMinutes / 60);
    const newTotalMinutesRemainder = newTotalMinutes % 60;

    setTotalHours(newTotalHours);
    setTotalMinutes(newTotalMinutesRemainder);
  };

  const cancelEntry = () => {
    setHours('');
    setMinutes('');
    subtractLastEntry();
  };

  const subtractLastEntry = () => {
    const lastEntry = timeEntries[timeEntries.length - 1];
    if (lastEntry) {
      const entryHours = lastEntry.hours;
      const entryMinutes = lastEntry.minutes;
      setTimeEntries(timeEntries.slice(0, -1));
      updateTotalTime(-entryHours, -entryMinutes);
    }
  };

  const clearEntries = () => {
    setTimeEntries([]);
    setTotalHours(0);
    setTotalMinutes(0);
    setHourlyRate('');
  };

  const handleHourlyRateChange = (e) => {
    setHourlyRate(parseFloat(e.target.value));
  };

  const calculatePayment = () => {
    const totalMinutesWorked = totalHours * 60 + totalMinutes;
    const paymentAmount = (totalMinutesWorked / 60) * hourlyRate;
    return (`₱ ${paymentAmount.toFixed(2)}`);
  };

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.inputGroup}>
            <div className={styles.inputContainer}>
              <label className={styles.label}>ADD HOURS</label>
            <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className={styles.input}
              />
              {error && <p className={styles.error}>{error}</p>}
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>ADD MINUTES</label>
            <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={`${styles.button} ${styles.addButton}`} onClick={addTimeEntry}>
                Add
              </button>
              <button className={`${styles.button} ${styles.cancelButton}`} onClick={cancelEntry}>
                Cancel
              </button>
              <button className={`${styles.button} ${styles.clearButton}`} onClick={clearEntries}>
                Clear
              </button>
            </div>
          </div>
          <div>
            <div className={styles.total}>
              {timeEntries.map((entry, index) => (
                <div key={index}>
                  {entry.hours} hour{entry.hours !== 1 ? 's' : ''} and {entry.minutes} minute
                  {entry.minutes !== 1 ? 's' : ''}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.total}>
            <label className={styles.total1}>Total Hours: </label>
            {totalHours} hour{totalHours !== 1 ? 's' : ''} and {totalMinutes} minute
            {totalMinutes !== 1 ? 's' : ''}
          </div>
          <div className={styles.total}>
          <label className={styles.addamount}>Hourly Rate:</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={handleHourlyRateChange}
              className={styles.placeholder}
            />
          </div>
          <div className={styles.payment}>
            <label className={styles.total1}>Payment: </label>
            {calculatePayment()}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default TimeCalculator;
