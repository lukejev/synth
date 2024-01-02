"use client"
import { createContext, useContext, useMemo, useReducer } from "react";

interface ISettingsContext {
  state: ISettingsState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

interface ISettingsState {
  volume: string;
}

export const initialState: ISettingsState = {
  volume: "0.5"
}

type ACTIONTYPE = {
  type: 'SET_VOLUME',
  payload: string;
}

const SettingsContext = createContext<ISettingsContext | null>(null)

export const settingsReducer = (state: ISettingsState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload
      }
    default:
      return state;
  }
}

export function SettingsContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState)

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  )
}

export function useSettingsContext() {
  const context = useContext(SettingsContext)

  if (!context)
    throw new Error(
      'No SettingsContext :('
    );

  return context;
}