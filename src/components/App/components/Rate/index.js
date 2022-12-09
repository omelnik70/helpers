import React, { useState, useEffect } from 'react';

import { ReactComponent as Like } from '../../../../assets/icons/like.svg';
import { ReactComponent as Dislike } from '../../../../assets/icons/dislike.svg';
import { wilsonScore } from '../../../Helpers';
import { browserLocale } from '../../../Helpers';
import { texts } from '../../../Texts';

import style from './style.module.scss';

const Rate = () => {
  const [count, setCount] = useState({
    like: 0,
    dislike: 0,
    rate: 0
  });

  const { like, dislike, rate } = count;

  useEffect(() => {
    setCount({ ...count, rate: wilsonScore(like, dislike) });
  }, [like, dislike]);

  const { ru, ua, en } = texts;
  const browserLanguage = browserLocale();
  const title = browserLanguage === 'ru' ? ru.rate.title : browserLanguage === 'ua' ? ua.rate.title : en.rate.title;
  const name = browserLanguage === 'ru' ? ru.rate.name : browserLanguage === 'ua' ? ua.rate.name : en.rate.name;

  const handleClickCount = (flag) => {
    flag ?
    setCount({ ...count, like: like + 1 }) :
    setCount({ ...count, dislike: dislike + 1 });
  };
  
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div className={style.info}>
        <p className={style.text}>
          <Like onClick={() => handleClickCount(true)} className={style.img} />
          {like}</p>
        <p className={style.text}>
          <Dislike onClick={() => handleClickCount(false)} className={style.img} />
          {dislike}</p>
        <p className={style.text}>{`${name} ${rate}`}</p>
      </div>
    </div>
  );
}

export default Rate;
