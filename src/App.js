import './App.css';
import Section from "./Components/Section.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Section title="Melody" options={["type","instrument"]}></Section>
        {/* <Section title="Chords"></Section> */}
      </header>
    </div>
  );
}

export default App;
