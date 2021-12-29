import './App.css';
import Section from "./Components/Section/Section.js"
import GenerateMelody from "./GenerateMelody/Methods/GenerateMelody.js"
import PlayMelody from './PlayMelody/PlayMelody';

import { useState } from "react"



function App() {
    const [melody, setMelody] = useState()

    async function NewMelodyHandler() {
        const generatedMelody = await GenerateMelody(10)
        setMelody(generatedMelody);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="Sections-container">
                    <Section title="Melody" options={["volume", "sound"]} step={true}></Section>
                    <Section title="Chords" options={["volume", "instrument", "sample", "reverb"]} step={true}></Section>
                    <Section title="Drums" options={["volume", "style"]} step={true}></Section>
                    <Section title="Bass" options={["volume"]} step={true}></Section>
                    <Section title="Background Noise" options={["volume", "type"]} step={false}></Section>
                    <Section title="Master Settings" options={["volume", "BPM", "New Melody", "Reset"]} step={false}></Section>
                    <button onClick={NewMelodyHandler}>New Melody</button>
                    <button onClick={() => PlayMelody(melody)}>Play Melody</button>
                </div>
            </header>
        </div>
    );
}

export default App;
