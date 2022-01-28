import React from 'react';
import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles['header-component']}>
      <nav className={styles.nav}>
        <h1>Alviz</h1>

        <ul>
          <li>Select Algorithm</li>
          <li>Select Speed</li>
          <li>Select deez nuts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
