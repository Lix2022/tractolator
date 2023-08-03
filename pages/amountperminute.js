import { useState } from 'react';
import styles from '../styles/AmountPerMinuteCalculator.module.css';
import Layout from "../components/Layout";

function AmountPerMinuteCalculator() {
  const [totalAmount, setTotalAmount] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const parsedAmount = parseFloat(totalAmount);
    if (!isNaN(parsedAmount)) {
      const amountPerMinute = parsedAmount / 60;
      setResult(`₱${amountPerMinute.toFixed(2)}`);
    } else {
      alert('Invalid input. Please enter a valid total amount.');
    }
  };

  const clearEntries = () => {
    setTotalAmount('');
    setResult('');
    
  };


  return (
  
    <div>
        
        <Layout>
    <div className={styles.container}>
      <label className={styles.myLabel}>INPUT AMOUNT:</label>
      <input
        type="text"
        className={styles.myInputText}
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
      />

      <button className={styles.myCalculateButton} onClick={handleCalculate}>
        Calculate
      </button>

      
              <button className={`${styles.button} ${styles.clearbutton}`} onClick={clearEntries}>
                Clear
              </button>
      <div>
        <label className={styles.myLabelDuration}>AMOUNT PER MINUTE: </label>
        <span className={styles.myResult}>{result}</span>
      </div>
    </div>
    </Layout>
    </div>
  );
}

export default AmountPerMinuteCalculator;
