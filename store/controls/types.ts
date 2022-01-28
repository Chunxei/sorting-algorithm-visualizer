export const SET_ALGORITHM_SPEED = 'SET_ALGORITHM_SPEED';
export const SET_ACTIVE_ALGORITHM = 'SET_ACTIVE_ALGORITHM';

export interface ControlsState {
  algorithmSpeed: number,
  activeAlgorithmName: string,
}

export interface SetActiveAlgorithm {
  type: typeof SET_ACTIVE_ALGORITHM
  data: string
}

export interface SetAlgorithmSpeed {
  type: typeof SET_ALGORITHM_SPEED
  data: number
}

export type ControlsAction = SetAlgorithmSpeed | SetActiveAlgorithm;
export type ControlsDispatch = (action: ControlsAction) => void;
