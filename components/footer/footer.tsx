import React from 'react';
import styles from './footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles['footer-component']}>
      <p>
        Source:
        {' '}
        <a href="https://github.com/Chunxei/sorting-algorithm-visualizer">
          Chunxei&apos;s Github
        </a>
      </p>
    </footer>
  );
}

export default Footer;
