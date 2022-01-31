import {
  ControlsAction,
  ControlsState,
  PLAY_VISUALIZATION, PLAY_VISUALIZATION_STEP,
  RESET_VISUALIZATION,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
  SET_ARRAY,
} from './types';
import {algorithmNames} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';
import {clampedRandom} from '../../utils/helpers/randomizer';

export const controlsState: ControlsState = {
  algorithmSpeed: 300,
  activeAlgorithmName: algorithmNames.BUBBLE_SORT,
  canPlayVisualization: false,
  canPlayVisualizationStep: false,
  resetVisualization: false,
  array: Array.from({length: 10}, (_, i): ArrayEntry => ({
    key: i,
    value: clampedRandom(5, 200),
  })),
};

export const controlsReducer = (
    state = controlsState,
    action: ControlsAction,
) => {
  console.log('[ACTION DATA]:', action?.data);

  switch (action.type) {
    case SET_ALGORITHM_SPEED:
      return {...state, algorithmSpeed: action.data};

    case SET_ACTIVE_ALGORITHM:
      return {...state, activeAlgorithmName: action.data};

    case PLAY_VISUALIZATION:
      return {...state, canPlayVisualization: action.data};

    case PLAY_VISUALIZATION_STEP:
      return {...state, canPlayVisualizationStep: action.data};

    case RESET_VISUALIZATION:
      return {...state, resetVisualization: action.data};

    case SET_ARRAY:
      return {...state, array: action.data};

    default:
      return state;
  }
};

