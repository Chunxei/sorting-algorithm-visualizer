import React from 'react';
import styles from './footer.module.scss';

/**
 * Header component hosting external links
 * @return {JSX.Element}
 * */
function Footer(): JSX.Element {
  return (
    <footer className={styles.footerComponent}>
      <p>
        Source:
        {' '}
        <a
          href="https://github.com/Chunxei/sorting-algorithm-visualizer"
          rel="noopener noreferrer"
          target="_blank"
        >
          Chunxei&apos;s Github
        </a>
      </p>
    </footer>
  );
}

export default Footer;
