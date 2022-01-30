import {
  PLAY_VISUALIZATION,
  PlayVisualization,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
  SetActiveAlgorithm,
  SetAlgorithmSpeed,
} from './types';

import {AlgorithmName} from '../../utils/algorithms';

const setAlgorithmSpeed = (speed: number): SetAlgorithmSpeed => ({
  type: SET_ALGORITHM_SPEED,
  data: speed,
});

const setActiveAlgorithm = (name: AlgorithmName): SetActiveAlgorithm => ({
  type: SET_ACTIVE_ALGORITHM,
  data: name,
});

const playVisualization = (canPlay: boolean): PlayVisualization => ({
  type: PLAY_VISUALIZATION,
  data: canPlay,
});

export const controlsActions = {
  setAlgorithmSpeed,
  setActiveAlgorithm,
  playVisualization,
};
