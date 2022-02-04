import React, {ChangeEventHandler, useState} from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import {useControlsContext} from '../../store/controls/provider';
import {
  controlsActions,
  controlsTransientActions,
} from '../../store/controls/actions';
import {AlgorithmName, algorithmNames} from '../../utils/algorithms';
import {clampedRandom} from '../../utils/helpers/randomizer';
import {ArrayEntry} from '../../utils/algorithms/types';
import cn from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';

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

  const [showControlsMenu, setShowControlsMenu] = useState<boolean>(true);

  const algoNames = React.useMemo(() => Object.keys(algorithmNames), []);

  const handleMenuButtonClick = () => {
    setShowControlsMenu((prev) => !prev);
  };

  const playOrPauseVisualization = () => {
    dispatch(controlsActions.playVisualization(!canPlayVisualization));
  };

  const quickToggleControl = (
      action: keyof typeof controlsTransientActions,
  ) => {
    dispatch(controlsTransientActions[action](true));
    window.setTimeout(() => {
      dispatch(controlsTransientActions[action](false));
    }, 50);
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
      value: clampedRandom(5, 555),
    }));
    dispatch(controlsActions.setArray(arrayToSort));
  };

  useClickOutside('controls-menu',
      showControlsMenu,
      () => setShowControlsMenu(false),
  );

  return (
    <header className={styles.headerComponent}>
      <h1>Sorting Algorithm Visualizer</h1>

      <button
        className={cn(styles.menuButton, {
          [styles.active]: showControlsMenu,
        })}
        onClick={handleMenuButtonClick}
        aria-label="toggle control menu"
      >
        <span>
          <Image
            src="/icons/icon-settings.svg"
            alt="..."
            width={15}
            height={15}
          />

          <span>
            Controls
          </span>
        </span>
      </button>

      <nav
        id="controls-menu"
        className={cn(styles.nav, {
          [styles.visible]: showControlsMenu,
        })}
      >
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

              <p>{((1011 - algorithmSpeed) / 10) - 1}</p>
            </label>
          </li>

          <li>
            <label htmlFor="arraySize">
              Array Size:
              {' '}

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

              <p>{array.length}</p>
            </label>
          </li>

          <li>
            <button
              onClick={() => playOrPauseVisualization()}
              aria-label="play/pause"
            >
              <span>
                {canPlayVisualization ? 'Pause' : 'Play'}
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={() => quickToggleControl('stepVisualizationBackward')}
              aria-label="previous step"
            >
              <span>
                Prev Step
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={() => quickToggleControl('stepVisualizationForward')}
              aria-label="next step"
            >
              <span>
                Next Step
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={() => quickToggleControl('playWithoutVisualization')}
              aria-label="instant sort"
            >
              <span>
                Instant Sort
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={() => quickToggleControl('resetVisualization')}
              aria-label="reset"
            >
              <span>
                Reset
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
