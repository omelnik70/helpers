import React from 'react';

import { browserLocale } from '../../Helpers';
import { texts } from '../../Texts';

import style from './style.module.scss';

const Lang = () => {
  const { ru, ua, en } = texts;
  const browserLanguage = browserLocale();
  const browserLanguageText = browserLanguage === 'ru' ? ru.header.browserLanguage : browserLanguage === 'ua' ? ua.header.browserLanguage : en.header.browserLanguage;
  
  return (
    <div className={style.lang}>
      <h3>{browserLanguageText}<span> | </span><span>{browserLanguage}</span></h3>
    </div>
  );
}

export default Lang;
