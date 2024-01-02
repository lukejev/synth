"use client";

import { useSettingsContext } from "@/app/lib/contexts/settingsContext";
import { Waveforms } from "@/app/lib/types/types";
import { useRef } from "react";

const waveforms = Object.values(Waveforms);

export const Waveform = () => {
  const { dispatch: settingsDispatch, state: settingsState } =
    useSettingsContext();

  const handleWaveformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('e', e.target.value)
    settingsDispatch({
      type: "SET_WAVEFORM",
      payload: { waveform: e.target.value as Waveforms },
    });
  };

  return (
    <div className="border border-white rounded-lg p-3 w-fit flex justify-center">
      <span className="mr-2">Waveform: </span>
      <select
        name="waveform"
        value={settingsState.waveform}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleWaveformChange(e)
        }
      >
        {waveforms.map((waveform) => (
          <option key={waveform} value={waveform} className="text-red-600">
            {waveform}
          </option>
        ))}
      </select>
    </div>
  );
};
