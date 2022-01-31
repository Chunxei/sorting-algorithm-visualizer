import {
  PLAY_VISUALIZATION,
  PLAY_VISUALIZATION_STEP,
  PlayVisualization,
  PlayVisualizationStep,
  RESET_VISUALIZATION,
  ResetVisualization,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
  SET_ARRAY,
  SetActiveAlgorithm,
  SetAlgorithmSpeed,
  SetArray,
} from './types';

import {AlgorithmName} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';

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

const playVisualizationStep = (canPlay: boolean): PlayVisualizationStep => ({
  type: PLAY_VISUALIZATION_STEP,
  data: canPlay,
});

const resetVisualization = (canReset: boolean): ResetVisualization => ({
  type: RESET_VISUALIZATION,
  data: canReset,
});

const setArray = (array: ArrayEntry[]): SetArray => ({
  type: SET_ARRAY,
  data: array,
});

export const controlsActions = {
  setAlgorithmSpeed,
  setActiveAlgorithm,
  playVisualization,
  playVisualizationStep,
  resetVisualization,
  setArray,
};
