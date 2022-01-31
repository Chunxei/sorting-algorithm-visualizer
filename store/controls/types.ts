import {AlgorithmName} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';

export const SET_ALGORITHM_SPEED = 'SET_ALGORITHM_SPEED';
export const SET_ACTIVE_ALGORITHM = 'SET_ACTIVE_ALGORITHM';
export const PLAY_VISUALIZATION = 'PLAY_VISUALIZATION';
export const PLAY_VISUALIZATION_STEP = 'PLAY_VISUALIZATION_STEP';
export const RESET_VISUALIZATION = 'RESET_VISUALIZATION';
export const SET_ARRAY = 'SET_ARRAY';

export interface ControlsState {
  algorithmSpeed: number
  activeAlgorithmName: AlgorithmName
  canPlayVisualization: boolean
  canPlayVisualizationStep: boolean
  array: ArrayEntry[]
  resetVisualization: boolean
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

export interface PlayVisualizationStep {
  type: typeof PLAY_VISUALIZATION_STEP
  data: boolean
}

export interface ResetVisualization {
  type: typeof RESET_VISUALIZATION
  data: boolean
}

export interface SetArray {
  type: typeof SET_ARRAY
  data: ArrayEntry[]
}

export type ControlsAction = SetAlgorithmSpeed
  | SetActiveAlgorithm
  | PlayVisualization
  | PlayVisualizationStep
  | ResetVisualization
  | SetArray;
export type ControlsDispatch = (action: ControlsAction) => void;
