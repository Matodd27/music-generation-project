import './App.css';
import Section from "./Components/Section/Section.js"

function App() {
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
                </div>
            </header>
        </div>
    );
}

export default App;
