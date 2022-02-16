import React from 'react';
import styles from './default.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

export interface DefaultLayoutProps {
  children?: React.ReactNode
}

/**
 * The default wrapper around page contents
 * @param {DefaultLayoutProps} props
 * @return {JSX.Element}
 * */
function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
  const {children} = props;

  return (
    <div className={styles['default-layout']}>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
