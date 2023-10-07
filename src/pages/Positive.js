import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./Positive.module.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 


const Positive = () => {
  const navigate = useNavigate();

  const initialValues = Array(10).fill({ value: 0, reason: "" });
  const [positiveSum, setPositiveSum] = useState(0);
  const [inputValues, setInputValues] = useState(initialValues);

  function onChangeHandler(index, key, value) {
    const newValues = [...inputValues];
    newValues[index] = { ...newValues[index], [key]: value };
    setInputValues(newValues);
  }

  function onSubmitHandler() {
    const sum = inputValues.reduce((acc, curr) => acc + curr.value, 0);
    setPositiveSum(sum);
    navigate('/negative', { state: { positiveSum: sum } });
  }

  return (
    <div className={styles.positive}>
      <div className={styles.positiveChild} />
      <label className={styles.solutionFinder}>Solution Finder</label>
      <Button
        className={styles.positiveButtonOK}
        onClick={onSubmitHandler}
        variant="primary"
        size="lg"
      >
        Confirm
      </Button>
      <label className={styles.positive1}>Positive</label>
      <div className={styles.circles}>
        {inputValues.map((input, index) => (
          <React.Fragment key={index}>
            <Form className={styles[`textBox${index}`]}>
              <Form.Control
                type="number"
                placeholder="point"
                value={input.value}
                onChange={(e) =>
                  onChangeHandler(index, "value", +e.target.value)
                }
              />
            </Form>
            <Form className={styles[`textBoxReason${index}`]}>
              <Form.Control
                type="text"
                placeholder="Reason"
                value={input.reason}
                onChange={(e) =>
                  onChangeHandler(index, "reason", e.target.value)
                }
              />
            </Form>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Positive;