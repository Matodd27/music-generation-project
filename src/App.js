import './App.css';
import Section from "./Components/Section/Section.js"
import GenerateMelody from "./GenerateMelody/Methods/GenerateMelody.js"
import PlayMelody from './PlayMelody/PlayMelody';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react"



function App() {
    const [melody, setMelody] = useState()

    async function NewMelodyHandler() {
        const generatedMelody = await GenerateMelody(10)
        setMelody(generatedMelody);
        console.log(generatedMelody)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="Sections-container">
                    <Section title="Melody" step={true}></Section>
                    <Section title="Chords" step={true}></Section>
                    <Section title="Drums" step={true}></Section>
                    <Section title="Bass" step={true}></Section>
                    <Section title="Background Noise" step={false}></Section>
                    <Section title="Master Settings" step={false}></Section>
                    <button onClick={NewMelodyHandler}>New Melody</button>
                    <button onClick={() => PlayMelody(melody)}>Play Melody</button>
                </div>
            </header>
        </div>
    );
}

export default App;
