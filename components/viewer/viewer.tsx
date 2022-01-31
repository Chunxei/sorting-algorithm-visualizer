import React, {useEffect, useRef, useState} from 'react';
import styles from './viewer.module.scss';
import {motion} from 'framer-motion';
import cn from 'classnames';
import Image from 'next/image';
import {useControlsContext} from '../../store/controls/provider';
import {controlsActions} from '../../store/controls/actions';
import {
  AlgorithmClass,
  algorithmClasses,
  algorithmDetails,
} from '../../utils/algorithms';
import {getVisualizerBarClasses, getVisualizerLegends} from './utils';

interface ArrayEntry {
  key: number
  value: number
}

/**
 * The component that renders the visualizer
 * @return {JSX.Element}
 * */
function Viewer(): JSX.Element {
  const {state, dispatch} = useControlsContext();
  const {
    canPlayVisualization,
    canPlayVisualizationStep,
    activeAlgorithmName,
    algorithmSpeed,
    array: initArray,
    resetVisualization,
  } = state;

  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [array, setArray] = useState<ArrayEntry[]>([]);
  const [max, setMax] = useState<number>(0);

  /* an instance of the sorting class will be passed to sorterRef.current */
  const sorterRef = useRef<AlgorithmClass | null>(null);
  const {current: sorter} = sorterRef;

  const algorithmInfo = algorithmDetails[activeAlgorithmName];

  const legends = React.useMemo(
      () => Object.entries(getVisualizerLegends(activeAlgorithmName)),
      [activeAlgorithmName],
  );

  const stopVisualization = () => {
    dispatch(controlsActions.playVisualization(false));
    window.clearTimeout(timer);
  };

  const handleSort = (
      sorterData: AlgorithmClass,
      speed: number,
      stepOnce?: boolean,
  ) => {
    const {array: newArray} = sorterData.sortOnce();
    setArray(newArray);
    sorterRef.current = sorterData;

    if ((sorterData.done && canPlayVisualization) || stepOnce) {
      stopVisualization();
    } else {
      const timeout = window.setTimeout(handleSort, speed, sorterData, speed);
      setTimer(timeout);
    }
  };

  const startVisualization = () => {
    window.clearInterval(timer);

    if (sorter) {
      handleSort(sorter, algorithmSpeed, false);
    }
  };

  const initializeVisualization = () => {
    const newInitArray = initArray.slice();
    setArray(newInitArray);
    setMax(Math.max(...newInitArray.map((entry) => entry.value)));

    sorterRef
        .current = new algorithmClasses[activeAlgorithmName]([...newInitArray]);
  };

  useEffect(() => {
    if (initArray.length && activeAlgorithmName.length) {
      stopVisualization();
      initializeVisualization();
    }
  }, [activeAlgorithmName, initArray]);

  useEffect(() => {
    if (resetVisualization) {
      stopVisualization();
      initializeVisualization();
    }
  }, [resetVisualization]);

  useEffect(() => {
    if (canPlayVisualization) {
      window.clearTimeout(timer);
      startVisualization();
    }
  }, [algorithmSpeed]);

  useEffect(() => {
    if (canPlayVisualizationStep && sorterRef.current) {
      stopVisualization();
      handleSort(sorterRef.current, algorithmSpeed, true);
    }
  }, [canPlayVisualizationStep]);

  useEffect(() => {
    if (canPlayVisualization) {
      startVisualization();
    } else {
      window.clearTimeout(timer);
    }
  }, [canPlayVisualization]);

  useEffect(() => {
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <article className={styles.viewerComponent}>
      <section className={styles.titleBar}>
        <h1 className={styles.titleBar__title}>
          {sorter?.name?.toLowerCase()?.replace(/_/g, ' ')}
          :
        </h1>

        <div className={styles.titleBar__tags}>
          { Object.entries(algorithmInfo.complexity).map(([key, value])=>(
            <div key={key} className={styles.titleBar__complexity}>
              <p>worst case {key} complexity:</p>
              {' '}
              <p dangerouslySetInnerHTML={{__html: value}}/>
            </div>
          )) }
        </div>
      </section>

      <section className={styles.visualizer}>
        { array.map(({key, value}, index) => (
          <motion.div
            key={key}
            className={cn(styles.visualizerBar, {
              ...getVisualizerBarClasses(sorter, activeAlgorithmName, index),
            })}
            style={{
              width: `${(1 / array.length) * 100}%`,
            }}
            layout
          >
            <div
              className={styles.visualizerBar__bar}
              style={{
                height: `${(value / max) * 100}%`,
              }}
            />

            <div className={styles.visualizerBar__label}>
              { value }
            </div>
          </motion.div>
        )) }
      </section>

      <section className={styles.info}>
        <section className={styles.info__legend}>
          {legends.map(([key, value], index) => (
            <div
              key={index}
              className={cn(styles.info__legend__definition, key)}
            >
              <div className={styles.legendTile} />
              <span>{value}</span>
            </div>
          ))}
        </section>

        <section className={styles.info__explanation}>
          <div>
            <strong>Explanation:</strong>
            <br/>
            <br/>
            {sorter?.annotation || algorithmInfo.description }
          </div>

          <div>
            <strong>References:</strong>
            {' '}
            { algorithmInfo.references.map((ref, ind, arr) => (
              <>
                <a
                  key={ref.link}
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.title}
                  {' '}
                  <Image
                    src="/icons/icon-external-link.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                </a>

                { ind === arr.length - 1 ? '.' : ', '}
              </>
            )) }
          </div>
        </section>
      </section>
    </article>
  );
}

export default Viewer;
