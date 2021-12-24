import './App.css';
import Section from "./Components/Section/Section.js"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Sections-container">
                    <Section title="Melody" options={["type", "instrument"]}></Section>
                    <Section title="Chords" options={[]}></Section>
                </div>
            </header>
        </div>
    );
}

export default App;
