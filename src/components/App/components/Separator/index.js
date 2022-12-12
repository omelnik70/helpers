import React from 'react';

import style from './style.module.scss';

const Separator = () => {
  
  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <div className={style.circle}></div>
      <div className={style.line}></div>
    </div>
  );
}

export default Separator;
