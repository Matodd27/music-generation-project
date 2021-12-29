import * as Tone from "tone"
// import { Piano } from "@tonejs/piano"

function PlayMelody(melody) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination()

    let time = 0
    let interval = 0.5
    for (let i = 0; i < 10; i++) {
        melody.forEach(chord => {
            synth.triggerAttackRelease(chord, "8n", time)
            time += interval
        })
    }
    
    Tone.Transport.start()
}

export default PlayMelody