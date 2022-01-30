import {
  ControlsAction,
  ControlsState,
  PLAY_VISUALIZATION,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
} from './types';
import {algorithmNames} from '../../utils/algorithms';

export const controlsState: ControlsState = {
  algorithmSpeed: 300,
  activeAlgorithmName: algorithmNames.SELECTION_SORT,
  canPlayVisualization: false,
};

export const controlsReducer = (
    state = controlsState,
    action: ControlsAction,
) => {
  switch (action.type) {
    case SET_ALGORITHM_SPEED:
      return {...state, algorithmSpeed: action.data};

    case SET_ACTIVE_ALGORITHM:
      return {...state, activeAlgorithmName: action.data};

    case PLAY_VISUALIZATION:
      return {...state, canPlayVisualization: action.data};

    default:
      return state;
  }
};

