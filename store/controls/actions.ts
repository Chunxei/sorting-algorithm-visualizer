import {SET_ACTIVE_ALGORITHM, SET_ALGORITHM_SPEED, SetActiveAlgorithm, SetAlgorithmSpeed} from "./types";

const setAlgorithmSpeed = (speed: number): SetAlgorithmSpeed => ({
  type: SET_ALGORITHM_SPEED,
  data: speed,
});

const setActiveAlgorithm = (name: string): SetActiveAlgorithm => ({
  type: SET_ACTIVE_ALGORITHM,
  data: name,
});

export const controlsActions = {
  setAlgorithmSpeed,
  setActiveAlgorithm
};
