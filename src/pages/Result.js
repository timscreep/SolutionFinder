import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Result.module.css";
import { useLocation } from 'react-router-dom'; 
const Result = () => {


  const location = useLocation();
  const positiveSum = location.state?.positiveSum ?? 0;
  const negativeSum = location.state?.negativeSum ?? 0;

  const [positiveVSnegative, setPositiveVSnegative] = useState(0);

  useEffect(() => {
    setPositiveVSnegative(positiveSum - negativeSum);
  }, [positiveSum, negativeSum]);
  return (
    <div className={styles.result}>
      <div className={styles.resultChild} />
      <label className={styles.solutionFinder}>Solution Finder</label>
      <label className={styles.result1}>Result</label>

      <h2 className={styles.positiveTitle}>Positive:</h2>
      <h2 className={styles.positiveValue}>{positiveSum}</h2>

      <h2 className={styles.negativeTitle}>Negative:</h2>
      <h2 className={styles.negativeValue}>{negativeSum}</h2>
 
      <h2 className={styles.resultTitle}>Result:</h2>
      <h2 className={`${styles.resultValue} ${positiveVSnegative > 0 ? styles.positiveValue : styles.negativeValue}`}>{positiveVSnegative}</h2>

      <Button
        className={styles.resultItem}
        variant="primary"
        href="/"
        size="lg"
      >
        Restart
      </Button>
    </div>
  );
};

export default Result;
