"use client"
import { createContext, useContext, useMemo, useReducer } from "react";
import { Waveforms } from "../types/types";

interface ISettingsContext {
  state: ISettingsState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

interface ISettingsState {
  volume: string;
  waveform: Waveforms;
}

export const initialState: ISettingsState = {
  volume: "0.5",
  waveform: Waveforms.Sine,
}

type ACTIONTYPE = {
  type: 'SET_VOLUME',
  payload: string;
} | {
  type: 'SET_WAVEFORM',
  payload: {
    waveform: Waveforms;
  };
}

const SettingsContext = createContext<ISettingsContext | null>(null)

export const settingsReducer = (state: ISettingsState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload
      }
    case 'SET_WAVEFORM':
      return {
        ...state,
        waveform: action.payload.waveform
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