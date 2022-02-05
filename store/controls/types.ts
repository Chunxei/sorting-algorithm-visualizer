import {AlgorithmName} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';

export const SET_ARRAY = 'SET_ARRAY';
export const SET_ALGORITHM_SPEED = 'SET_ALGORITHM_SPEED';
export const SET_ACTIVE_ALGORITHM = 'SET_ACTIVE_ALGORITHM';
export const PLAY_VISUALIZATION = 'PLAY_VISUALIZATION';
export const PLAY_WITHOUT_VISUALIZATION = 'PLAY_WITHOUT_VISUALIZATION';
export const STEP_VISUALIZATION_FORWARD = 'STEP_VISUALIZATION_FORWARD';
export const STEP_VISUALIZATION_BACKWARD = 'STEP_VISUALIZATION_BACKWARD';
export const RESET_VISUALIZATION = 'RESET_VISUALIZATION';
export const SET_PLAYBACK_POSITION = 'SET_PLAYBACK_POSITION';
export const SET_PLAYBACK_LENGTH = 'SET_PLAYBACK_LENGTH';

export interface ControlsState {
  array: ArrayEntry[]
  algorithmSpeed: number
  activeAlgorithmName: AlgorithmName
  canPlayVisualization: boolean
  canPlayWithoutVisualization: boolean
  canStepVisualizationForward: boolean
  canStepVisualizationBackward: boolean
  resetVisualization: boolean
  //
  playbackPosition: number,
  playbackLength: number
}

export interface SetArray {
  type: typeof SET_ARRAY
  data: ArrayEntry[]
}

export interface SetActiveAlgorithm {
  type: typeof SET_ACTIVE_ALGORITHM
  data: string
}

export interface SetAlgorithmSpeed {
  type: typeof SET_ALGORITHM_SPEED
  data: number
}

export interface PlayVisualization {
  type: typeof PLAY_VISUALIZATION
  data: boolean
}

export interface PlayWithoutVisualization {
  type: typeof PLAY_WITHOUT_VISUALIZATION
  data: boolean
}

export interface StepVisualizationForward {
  type: typeof STEP_VISUALIZATION_FORWARD
  data: boolean
}

export interface StepVisualizationBackward {
  type: typeof STEP_VISUALIZATION_BACKWARD
  data: boolean
}

export interface ResetVisualization {
  type: typeof RESET_VISUALIZATION
  data: boolean
}

export interface SetPlaybackLength {
  type: typeof SET_PLAYBACK_LENGTH
  data: number
}

export interface SetPlaybackPosition {
  type: typeof SET_PLAYBACK_POSITION
  data: number
}

export type ControlsAction = SetAlgorithmSpeed
  | SetArray
  | SetActiveAlgorithm
  | PlayVisualization
  | PlayWithoutVisualization
  | StepVisualizationForward
  | StepVisualizationBackward
  | ResetVisualization
  | SetPlaybackLength
  | SetPlaybackPosition;

export type ControlsDispatch = (action: ControlsAction) => void;
