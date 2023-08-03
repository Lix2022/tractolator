import React, { useState } from 'react';
import styles from '../styles/between.calculator.module.css';
import Layout from "../components/Layout";


function BetweenCalculator() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [result, setResult] = useState('');
  const [payment, setPayment] = useState('');

  const handleCalculate = () => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startTimeObj = new Date(0, 0, 0, startHour, startMinute);
    const endTimeObj = new Date(0, 0, 0, endHour, endMinute);

    if (isNaN(startTimeObj) || isNaN(endTimeObj)) {
      alert('Invalid time format!');
      return;
    }

    if (startTimeObj >= endTimeObj) {
      alert('Start time should be earlier than end time!');
      return;
    }

    const duration = endTimeObj - startTimeObj;

    const minutes = Math.floor(duration / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    setResult(`${hours}h ${remainingMinutes}m`);

    const paymentAmount = minutes * 4.67;
    setPayment(`₱${paymentAmount.toFixed(2)}`);
  };
  
  const clearEntries = () => {
    setPayment([]);
    setResult([]);
    setEndTime([]);
    setStartTime([]);
  };
  
  return (
    <div>
     <Layout>

    <div className={styles.container}>
      <label className={styles.label}> START TIME </label>
      <input className={styles.myInputClass} type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

      <label className={styles.label}>END TIME</label>
      <input className={styles.myInputClass} type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />

      

      <button className={styles.myButtonClass} onClick={handleCalculate}>Calculate</button>
      
      <button className={styles.clearButton} onClick={clearEntries}>Clear</button>

      <div className={styles.myDivClass}>
        <label className={styles.labelDuration}>DURATION:</label>
        <span className={styles.mySpanClass}>{result}</span>
      </div>

      <div className={styles.myDivClass}>
        <label className={styles.labelPayment}>PAYMENT:</label>
        <span className={styles.mySpanClass}>{payment}</span>
      </div>
    </div>
    </Layout>
  </div>
    


  );
}




export default BetweenCalculator;