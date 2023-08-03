import React, { useState } from 'react';
import styles from '../styles/percent.calculator.module.css';
import Layout from '../components/Layout';

function PercentCalculator() {
  const [totalAmount, setTotalAmount] = useState('');
  const [ownerResult, setOwnerResult] = useState('');
  const [workerResult, setWorkerResult] = useState('');

  const handleCalculate = () => {
    const parsedAmount = parseFloat(totalAmount);
    if (!isNaN(parsedAmount)) {
      const ownerPercentage = 0.6;
      const workerPercentage = 0.4;

      const ownerResult = parsedAmount * ownerPercentage;
      const workerResult = parsedAmount * workerPercentage;

      setOwnerResult(`₱${ownerResult.toFixed(2)}`);
      setWorkerResult(`₱${workerResult.toFixed(2)}`);
    } else {
      alert('Invalid amount format!');
    }
  };

  const clearEntries = () => {
    setWorkerResult([]);
    setOwnerResult([]);
    setTotalAmount([]);
    
  };

  return (
    <div> <Layout>
    <div className={styles.container}>
      <label className={styles.label}>INPUT AMOUNT</label>
      <div className={styles.result}>
        <input type="text" className={styles.inputText} value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
   
      </div>
      
      <button className={styles.button} onClick={handleCalculate}>Calculate</button>
      <button className={styles.clearbutton} onClick={clearEntries}>Clear</button>

      <div className={styles.result}>
        <span className={styles.labelWorker}>OWNER RESULT:</span> {ownerResult} 
      </div>
      <div className={styles.result}>
        <span className={styles.labelOwner}>WORKER RESULT:</span> {workerResult} 
      </div>



    </div>
   </Layout>
    </div>
  );
}

export default PercentCalculator;
