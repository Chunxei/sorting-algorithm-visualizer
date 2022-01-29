import React, {useEffect, useRef, useState} from 'react';
import styles from './viewer.module.scss';
import {motion} from 'framer-motion';
import {useControlsContext} from "../../store/controls/provider";
import {bubbleSort} from "../../utils/algorithms";

const values: number[] = [1, 3, 45, 13, 55, 34, 35, 6, 67, 78, 32, 21, 56, 90, 8, 5, 97, 24, 49, 54];

function Viewer(): JSX.Element {
  const {state, dispatch} = useControlsContext();

  const [timer, setTimer] = useState<number | undefined>();
  const [array, setArray] = useState<number[]>(values);

  const [sortData, setSortData] = useState({
    leftIndex: 0,
    rightIndex: 1,
    lastIndex: array.length - 1,
  });

  const visualizerContainerRef = useRef<HTMLElement | null>(null);

  const max = Math.max(...values);

  const handleBubbleSort = (list: number[], sortInfo: typeof sortData) => {
    const {array: newArray, ...newSortData} = bubbleSort(
      list,
      sortInfo.leftIndex,
      sortInfo.rightIndex,
      sortInfo.lastIndex
    );

    console.log('[ARRAY]:', newArray);
    console.log('[SORT DATA]:', newSortData);

    setArray(newArray);
    setSortData(newSortData);

    if (sortData.lastIndex > 1) {
      // startSorting();
      const timeout = window.setTimeout(handleBubbleSort, 500, newArray, newSortData);
      setTimer(timeout);
    }
  }

  const startSorting = () => {
    window.clearInterval(timer);
    const timeout = window.setTimeout(handleBubbleSort, 500, array, sortData);
    setTimer(timeout);
  };

  useEffect(() => {
    startSorting();

    return () => {
      window.clearInterval(timer);
    }
  }, []);

  return (
    <article className={styles['viewer-component']}>
      <motion.section
        className={styles.visualizer}
        ref={visualizerContainerRef}
      >
        { array.map((num) => (
          <motion.div
            key={num}
            className={styles['visualizer-bar']}
            style={{
              width: `${(1 / array.length) * 100}%`,
            }}
            layout
          >
            <motion.div
              className={styles['visualizer-bar__bar']}
              data-value={num}
              style={{
                scaleY: num / max,
              }}
            />

            <div className={styles['visualizer-bar__label']}>
              { num }
            </div>
          </motion.div>
        )) }
      </motion.section>
    </article>
  );
}

export default Viewer;
