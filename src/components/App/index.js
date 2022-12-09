import React from 'react';

import TransLiters from './components/TransLiters';
import Rate from './components/Rate';
import Logo from './components/Logo';
import Lang from './components/Lang';

import style from './style.module.scss';

const App = () => {
  
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Lang />
      </header>
      <div className={style.content}>
        <TransLiters />
        <Rate />
        <Logo />
      </div>
    </div>
  );
}

export default App;
