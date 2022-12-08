import React, { useState } from 'react';

import { browserLocale, transliter, createLink } from '../../Helpers';
import { texts } from '../../Texts';

import style from './style.module.scss';

const TransLiters = () => {
  const [input, setInput] = useState({
    cyr: '',
    lat: ''
  });
  const { cyr, lat } = input;
  const { ru, ua, en } = texts;
  const browserLanguage = browserLocale();
  const inputCyr = browserLanguage === 'ru' ? ru.transliter.inputCyr : browserLanguage === 'ua' ? ua.transliter.inputCyr : en.transliter.inputCyr;
  const inputLat = browserLanguage === 'ru' ? ru.transliter.inputLat : browserLanguage === 'ua' ? ua.transliter.inputLat : en.transliter.inputLat;
  const holder = browserLanguage === 'ru' ? ru.transliter.holder : browserLanguage === 'ua' ? ua.transliter.holder : en.transliter.holder;
  const linkText = transliter(cyr);
  const linkTextLat = createLink(lat);
  
  return (
    <div className={style.transliterBox}>
          <div className={style.cyrBox}>
            <h3>{inputCyr}</h3>
            <label htmlFor="transliter">
              <input 
                onChange={(e) => setInput({ ...input, cyr: e.target.value})}
                id="transliter" 
                type="text"
                placeholder={holder} 
                value={cyr}
              />
              {linkText}
            </label>
          </div>

          <div className={style.latBox}>
            <h3>{inputLat}</h3>
            <label htmlFor="transliter">
              <input 
                onChange={(e) => setInput({ ...input, lat: e.target.value})}
                id="transliter" 
                type="text"
                placeholder={holder} 
                value={lat}
              />
              {linkTextLat}
            </label>
          </div>
        </div>
  );
}

export default TransLiters;
