import {AlgorithmName} from '../../utils/algorithms';

export const SET_ALGORITHM_SPEED = 'SET_ALGORITHM_SPEED';
export const SET_ACTIVE_ALGORITHM = 'SET_ACTIVE_ALGORITHM';
export const PLAY_VISUALIZATION = 'PLAY_VISUALIZATION';

export interface ControlsState {
  algorithmSpeed: number
  activeAlgorithmName: AlgorithmName
  canPlayVisualization: boolean
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

export type ControlsAction = SetAlgorithmSpeed
  | SetActiveAlgorithm
  | PlayVisualization;
export type ControlsDispatch = (action: ControlsAction) => void;
