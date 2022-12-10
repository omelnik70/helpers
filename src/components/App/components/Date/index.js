import React, { useState, useEffect } from 'react';

import { browserLocale, timeConverter, dateConverter } from '../../../Helpers';
import { texts } from '../../../Texts';

import style from './style.module.scss';

const DateTime = () => {
  const [timestamp, setTimestamp] = useState(new Date().getTime());

  useEffect( () => {
    
    setInterval(()=>{
      setTimestamp(new Date().getTime());
    }, 1000);

  }, []);

  const { ru, ua, en } = texts;
  const browserLanguage = browserLocale();
  const dateText = browserLanguage === 'ru' ? ru.date.date : browserLanguage === 'ua' ? ua.date.date : en.date.date;
  const timeText = browserLanguage === 'ru' ? ru.date.time : browserLanguage === 'ua' ? ua.date.time : en.date.time;

  let currentDate = dateConverter(timestamp);
  let currentTime = timeConverter(timestamp);
  
  return (
    <div className={style.date}>
      <h3>{`${dateText} ${currentDate}`}<span> | </span><span>{`${timeText} ${currentTime}`}</span></h3>
    </div>
  );
}

export default DateTime;
