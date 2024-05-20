import React, { useState } from 'react';
import s from './Conter.module.scss'; 

function Counter() {
  const [quantity, setQuantity] = useState(0); 

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 0) {
        return prevQuantity - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className={`${s.Counter} ${s.ButtonCounterBackground}`}>
      <button className={s.DecrementButton} onClick={handleDecrement} disabled={quantity === 0}>
        -
      </button>
      <span>{quantity}</span>
      <button className={s.IncrementButton} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;