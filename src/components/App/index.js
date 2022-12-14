import React from 'react';

import TransLiters from './components/TransLiters';
import Rate from './components/Rate';
import Logo from './components/Logo';
import Lang from './components/Lang';
import DateTime from './components/Date';
import Separator from './components/Separator';

import style from './style.module.scss';

const App = () => {
  
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Lang />
      </header>
      <div className={style.content}>
        <TransLiters />
        <Separator />
        <Rate />
        <Separator />
        <DateTime />
        <Separator />
        <Logo />
      </div>
    </div>
  );
}

export default App;
