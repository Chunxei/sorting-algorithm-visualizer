import {
  PLAY_VISUALIZATION,
  PLAY_WITHOUT_VISUALIZATION,
  PlayVisualization,
  PlayWithoutVisualization,
  RESET_VISUALIZATION,
  ResetVisualization,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
  SET_ARRAY,
  SET_PLAYBACK_LENGTH,
  SET_PLAYBACK_POSITION,
  SetActiveAlgorithm,
  SetAlgorithmSpeed,
  SetArray,
  SetPlaybackLength,
  SetPlaybackPosition,
  STEP_VISUALIZATION_BACKWARD,
  STEP_VISUALIZATION_FORWARD,
  StepVisualizationBackward,
  StepVisualizationForward,
} from './types';

import {AlgorithmName} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';

const setArray = (array: ArrayEntry[]): SetArray => ({
  type: SET_ARRAY,
  data: array,
});

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

const playWithoutVisualization = (
    canPlay: boolean,
): PlayWithoutVisualization => ({
  type: PLAY_WITHOUT_VISUALIZATION,
  data: canPlay,
});

const stepVisualizationForward = (
    canPlay: boolean,
): StepVisualizationForward => ({
  type: STEP_VISUALIZATION_FORWARD,
  data: canPlay,
});

const stepVisualizationBackward = (
    canPlay: boolean,
): StepVisualizationBackward => ({
  type: STEP_VISUALIZATION_BACKWARD,
  data: canPlay,
});

const resetVisualization = (canReset: boolean): ResetVisualization => ({
  type: RESET_VISUALIZATION,
  data: canReset,
});

const setPlaybackLength = (length: number): SetPlaybackLength => ({
  type: SET_PLAYBACK_LENGTH,
  data: length,
});

const setPlaybackPosition = (position: number): SetPlaybackPosition => ({
  type: SET_PLAYBACK_POSITION,
  data: position,
});

/* For actions that actively control state */
export const controlsActions = {
  setArray,
  setAlgorithmSpeed,
  setActiveAlgorithm,
  playVisualization,
  setPlaybackLength,
  setPlaybackPosition,
} as const;

/* For actions that act as emitters,
* and trigger changes that are listened for elsewhere.
* Typically done by a rapid toggle.
* */
export const controlsTransientActions = {
  playWithoutVisualization,
  stepVisualizationForward,
  stepVisualizationBackward,
  resetVisualization,
} as const;
