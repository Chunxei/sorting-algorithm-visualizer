import React, {ChangeEventHandler} from 'react';
import styles from './header.module.scss';
import {useControlsContext} from '../../store/controls/provider';
import {controlsActions} from '../../store/controls/actions';
import {AlgorithmName, algorithmNames} from '../../utils/algorithms';
import {clampedRandom} from '../../utils/helpers/randomizer';
import {ArrayEntry} from '../../utils/algorithms/types';

/**
 * Header component hosting visualizer controls
 * @return {JSX.Element}
 * */
function Header(): JSX.Element {
  const {state, dispatch} = useControlsContext();
  const {
    activeAlgorithmName,
    canPlayVisualization,
    algorithmSpeed,
    array,
  } = state;
  const algoNames = React.useMemo(() => Object.keys(algorithmNames), []);

  const togglePlayVisualization = () => {
    dispatch(controlsActions.playVisualization(!canPlayVisualization));
  };

  const playVisualizationStep = () => {
    dispatch(controlsActions.playVisualizationStep(true));
    window.setTimeout(() => {
      dispatch(controlsActions.playVisualizationStep(false));
    }, 100);
  };

  const resetVisualization = () => {
    dispatch(controlsActions.resetVisualization(true));
    window.setTimeout(() => {
      dispatch(controlsActions.resetVisualization(false));
    }, 100);
  };

  const selectAlgorithm: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const name = event.target.value as AlgorithmName;
    dispatch(controlsActions.setActiveAlgorithm(name));
  };

  const selectSpeed: ChangeEventHandler<HTMLInputElement> = (event) => {
    const speed = 1011 - (parseInt(event.target.value) * 10);
    dispatch(controlsActions.setAlgorithmSpeed(speed));
  };

  const generateArray: ChangeEventHandler<HTMLInputElement> = (event) => {
    const length = parseInt(event.target.value);
    const arrayToSort = Array.from({length}, (_, i): ArrayEntry => ({
      key: i,
      value: clampedRandom(10, 200),
    }));
    dispatch(controlsActions.setArray(arrayToSort));
  };

  return (
    <header className={styles.headerComponent}>
      <nav className={styles.nav}>
        <h1>Alviz</h1>

        <ul>
          <li>
            <label htmlFor="algorithmName">
              Algorithm: {' '}
              <select
                name="algorithmName"
                id="algorithmName"
                value={activeAlgorithmName}
                onChange={selectAlgorithm}
              >
                {
                  algoNames.map((name) => (
                    <option
                      key={name}
                      value={name}
                    >
                      {name.toLowerCase().replace(/_/g, ' ')}
                    </option>
                  ))
                }
              </select>
            </label>
          </li>

          <li>
            <label htmlFor="algorithmSpeed">
              Speed:
              {' '}
              <span>1</span>
              <input
                type="range"
                id="algorithmSpeed"
                min={1}
                max={101}
                step={10}
                title={`${(1011 - algorithmSpeed) / 10}`}
                value={(1011 - algorithmSpeed) / 10}
                onChange={selectSpeed}
              />
              100
            </label>
          </li>

          <li>
            <label htmlFor="arraySize">
              Array Size:
              {' '}
              <span>5</span>
              <input
                type="range"
                id="arraySize"
                min={5}
                max={50}
                step={5}
                title={`${array.length}`}
                value={array.length}
                onChange={generateArray}
              />
              50
            </label>
          </li>

          <li>
            <button
              onClick={resetVisualization}
            >
              Instant
            </button>
          </li>

          <li>
            <button
              onClick={playVisualizationStep}
            >
              Step
            </button>
          </li>

          <li>
            <button
              onClick={() => togglePlayVisualization()}
            >
              {canPlayVisualization ? 'Pause' : 'Play'}
            </button>
          </li>

          <li>
            <button
              onClick={resetVisualization}
            >
              Reset
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
