import React from 'react';
import logo from '../../logo.svg';

import { browserLocale } from '../../Helpers';
import { texts } from '../../Texts';

import style from './style.module.scss';

const Logo = () => {
  const { ru, ua, en } = texts;
  const browserLanguage = browserLocale();
  const editText = browserLanguage === 'ru' ? ru.content.edit : browserLanguage === 'ua' ? ua.content.edit : en.content.edit;
  const saveText = browserLanguage === 'ru' ? ru.content.save : browserLanguage === 'ua' ? ua.content.save : en.content.save;
  const learnText = browserLanguage === 'ru' ? ru.content.learn : browserLanguage === 'ua' ? ua.content.learn : en.content.learn;
  
  return (
    <>
      <img src={logo} className={style.logo} alt="logo" />
      <p>
        {editText}<code>src/App/index.js</code>{saveText}
      </p>
      <a
        className={style.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {learnText}
      </a>
    </>
  );
}

export default Logo;
