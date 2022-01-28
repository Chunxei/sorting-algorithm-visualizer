import React from 'react';
import styles from './default.module.scss';
import {useControlsContext} from "../../store/controls/provider";

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
  const {children} = props;
  const {state, dispatch} = useControlsContext();

  return (
    <div className={styles['default-layout']}>
      { children }
    </div>
  );
}

export default DefaultLayout;
