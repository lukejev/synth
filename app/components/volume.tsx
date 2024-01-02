"use client"
import { useSettingsContext } from "../lib/contexts/settingsContext";

export const Volume = () => {
  const { dispatch: settingsDispatch, state: settingsState } = useSettingsContext();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settingsDispatch({ type: 'SET_VOLUME', payload: e.target.value })
  };

  return (
    <div>
      <input
        type="range"
        min="0.0"
        max="1"
        step="0.01"
        value={settingsState.volume}
        name="volume"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleVolumeChange(e)}
      />
    </div>
  );
};
