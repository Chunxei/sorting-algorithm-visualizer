import {
  ControlsAction,
  ControlsState,
  PLAY_VISUALIZATION,
  PLAY_WITHOUT_VISUALIZATION,
  RESET_VISUALIZATION,
  SET_ACTIVE_ALGORITHM,
  SET_ALGORITHM_SPEED,
  SET_ARRAY, SET_PLAYBACK_LENGTH, SET_PLAYBACK_POSITION,
  STEP_VISUALIZATION_BACKWARD,
  STEP_VISUALIZATION_FORWARD,
} from './types';
import {AlgorithmName, algorithmNames} from '../../utils/algorithms';
import {ArrayEntry} from '../../utils/algorithms/types';
import {clampedRandom} from '../../utils/helpers/randomizer';

const initArray = Array.from({length: 30}, (_, i): ArrayEntry => ({
  key: i,
  value: clampedRandom(5, 555),
}));

export const controlsState: ControlsState = {
  array: initArray,
  algorithmSpeed: 301,
  activeAlgorithmName: algorithmNames.BUBBLE_SORT,
  canPlayVisualization: false,
  canPlayWithoutVisualization: false,
  canStepVisualizationForward: false,
  canStepVisualizationBackward: false,
  resetVisualization: false,
  //
  playbackPosition: 0,
  playbackLength: initArray.length - 1,
};

export const controlsReducer = (
    state = controlsState,
    action: ControlsAction,
): ControlsState => {
  // console.log('[ACTION DATA]:', action?.data);

  switch (action.type) {
    case SET_ARRAY:
      return {...state, array: action.data};

    case SET_ALGORITHM_SPEED:
      return {...state, algorithmSpeed: action.data};

    case SET_ACTIVE_ALGORITHM:
      return {...state, activeAlgorithmName: action.data as AlgorithmName};

    case PLAY_VISUALIZATION:
      return {...state, canPlayVisualization: action.data};

    case PLAY_WITHOUT_VISUALIZATION:
      return {...state, canPlayWithoutVisualization: action.data};

    case STEP_VISUALIZATION_FORWARD:
      return {...state, canStepVisualizationForward: action.data};

    case STEP_VISUALIZATION_BACKWARD:
      return {...state, canStepVisualizationBackward: action.data};

    case RESET_VISUALIZATION:
      return {...state, resetVisualization: action.data};

    case SET_PLAYBACK_POSITION:
      return {...state, playbackPosition: action.data};

    case SET_PLAYBACK_LENGTH:
      return {...state, playbackLength: action.data};

    default:
      return state;
  }
};

