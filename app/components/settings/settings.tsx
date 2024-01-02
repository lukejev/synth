import { Volume } from "./volume"
import { Waveform } from "./waveform"

export const Settings = () => {
  return (
    <div className="flex gap-2">
      <Volume />
      <Waveform />
    </div>
  )
}