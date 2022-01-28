import {ControlsAction, ControlsState, SET_ACTIVE_ALGORITHM, SET_ALGORITHM_SPEED} from "./types";

export const controlsState: ControlsState = {
  algorithmSpeed: 5,
  activeAlgorithmName: 'BUBBLE_SORT'
};

export const controlsReducer = (state = controlsState, action: ControlsAction) => {
  switch(action.type) {
    case SET_ALGORITHM_SPEED:
      return {...state, algorithmSpeed: action.data};

    case SET_ACTIVE_ALGORITHM:
      return {...state, activeAlgorithmName: action.data};

    default:
      return state;
  }
};

