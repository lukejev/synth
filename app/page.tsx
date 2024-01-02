import { Synth } from './components/synth'
import { SettingsContextProvider } from './lib/contexts/settingsContext'

export default function Home() {
  return (
    <div className="p-8">
      <SettingsContextProvider>
        <Synth />
      </SettingsContextProvider>
    </div>
  )
}
