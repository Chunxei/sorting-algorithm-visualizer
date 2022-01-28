import React, {useContext, useReducer} from 'react';
import {ControlsState, ControlsAction, ControlsDispatch} from './types'
import {controlsReducer, controlsState} from "./reducer";

const ControlsContext = React.createContext<{
  state: ControlsState,
  dispatch: ControlsDispatch
} | undefined>(undefined);

interface ControlsProviderProps {
  children: React.ReactNode
}

export const useControlsContext = () => {
  const context = useContext(ControlsContext);
  if (context === undefined) {
    throw new Error('Hook must be used within ControlsProvider');
  }

  return context;
}

function ControlsProvider({ children }: ControlsProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(controlsReducer, controlsState);
  return (
    <ControlsContext.Provider value={{state, dispatch}}>
      { children }
    </ControlsContext.Provider>
  );
}

export default ControlsProvider;
