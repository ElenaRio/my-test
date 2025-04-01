import { useState, useEffect } from 'react';
import styles from './PromotionTimer.module.scss';

const PromotionTimer = () => {
  // Устанавливаем начальное время (например, 14 часов 55 минут 15 секунд)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 55,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.promotion}>
      <div>
        <p>{String(timeLeft.hours).padStart(2, '0')}</p>
        <b>годин</b>
      </div>
      <div>
        <p>{String(timeLeft.minutes).padStart(2, '0')}</p>
        <b>хвилин</b>
      </div>
      <div>
        <p>{String(timeLeft.seconds).padStart(2, '0')}</p>
        <b>секунд</b>
      </div>
    </div>
  );
};

export default PromotionTimer;
