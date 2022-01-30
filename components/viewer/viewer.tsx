import React, {useEffect, useRef, useState} from 'react';
import styles from './viewer.module.scss';
import {motion} from 'framer-motion';
import cn from 'classnames';
import {useControlsContext} from '../../store/controls/provider';
import {controlsActions} from '../../store/controls/actions';
import {
  AlgorithmClass,
  algorithmClasses,
  algorithmNames,
  BUBBLE_SORT,
  SELECTION_SORT,
} from '../../utils/algorithms';

const values: number[] = [
  1, 3, 45, 3, 55, 3, 35, 6, 67, 78, 112,
  32, 21, 56, 90, 8, 5, 97, 24, 49, 54, 160,
];

interface ArrayEntry {
  key: number
  value: number
}

const entries = values.map((value, index): ArrayEntry => ({
  key: index,
  value,
}));

/**
 * The component that renders the visualizer
 * @return {JSX.Element}
 * */
function Viewer(): JSX.Element {
  const {state, dispatch} = useControlsContext();
  const {
    canPlayVisualization,
    activeAlgorithmName,
    algorithmSpeed,
  } = state;

  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [array, setArray] = useState<ArrayEntry[]>(entries);
  const [indexes, setIndexes] = useState<number[]>([]);
  const [max] = useState<number>(Math.max(...values));

  /* an instance of the sorting class will be passed to sorterRef.current */
  const sorterRef = useRef<AlgorithmClass | null>(null);
  const {current: sorter} = sorterRef;
  // console.log('[SORTER]:', sorter);

  const handleSort = (sorterData: AlgorithmClass, speed: number) => {
    const {array: newArray, indexes} = sorterData.sortOnce();
    // console.log('[ARRAY]:', newArray);
    // console.log('[INDEXES]:', indexes);

    setArray(newArray);
    setIndexes(indexes);
    sorterRef.current = sorterData;

    // if (!sorterData.done && canPlayVisualization) {
    if (sorterData.done) {
      dispatch(controlsActions.playVisualization(false));
    } else {
      const timeout = window.setTimeout(handleSort, speed, sorterData, speed);
      setTimer(timeout);
    }
  };

  const startSorting = () => {
    window.clearInterval(timer);
    const timeout = window.setTimeout(
        handleSort, algorithmSpeed,
        sorter, algorithmSpeed,
    );
    setTimer(timeout);
  };

  const getVisualizerBarClassNames = (
      index: number,
  ) : Record<string, boolean> => {
    let sort: AlgorithmClass;

    switch (activeAlgorithmName) {
      case algorithmNames.BUBBLE_SORT:
        sort = sorter as BUBBLE_SORT;
        return {
          [styles.sorted]: index > sort?.lastIndex,
          [styles['highlight-1']]: index === sort?.leftIndex,
          [styles['highlight-2']]: index === sort?.rightIndex,
          [styles['highlight-3']]: index === sort?.lastIndex,
        };

      case algorithmNames.SELECTION_SORT:
        sort = sorter as SELECTION_SORT;
        return {
          [styles.sorted]: index < sort?.startIndex,
          [styles['highlight-1']]: index === sort?.startIndex,
          [styles['highlight-2']]: index === sort?.currentMinIndex,
          [styles['highlight-3']]: index === sort?.scanIndex,
        };

      default:
        return {};
    }
  };

  useEffect(() => {
    if (activeAlgorithmName?.length) {
      sorterRef.current = new algorithmClasses[activeAlgorithmName](array);
    }
  }, [activeAlgorithmName]);

  /* FOR TESTING WITHOUT CONTROLS: TODO - REMOVE */
  useEffect(() => {
    if (sorter?.name === activeAlgorithmName) {
      startSorting();
    }
  }, [sorterRef.current?.name]);

  useEffect(() => {
    if (canPlayVisualization) {
      startSorting();
    }
  }, [canPlayVisualization]);

  useEffect(() => {
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <article className={styles['viewer-component']}>
      <section className={styles.visualizer}>
        { array.map(({key, value}, index) => (
          <motion.div
            key={key}
            className={cn(styles['visualizer-bar'], {
              ...getVisualizerBarClassNames(index),
            })}
            style={{
              width: `${(1 / array.length) * 100}%`,
            }}
            layout
          >
            <div
              className={styles['visualizer-bar__bar']}
              style={{
                // transform: `scaleY(${((num / max) * 0.99) + 0.01})`,
                transform: `scaleY(${value / max})`,
              }}
            />

            <div className={styles['visualizer-bar__label']}>
              { value }
            </div>
          </motion.div>
        )) }
      </section>
    </article>
  );
}

export default Viewer;
