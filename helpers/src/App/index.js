import React from 'react';

import TransLiters from '../Components/TransLiters';
import Logo from '../Components/Logo';
import Lang from '../Components/Lang';

import style from './style.module.scss';

const App = () => {
  
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Lang />
      </header>
      <div className={style.content}>
        <TransLiters />
        <Logo />
      </div>
    </div>
  );
}

export default App;
