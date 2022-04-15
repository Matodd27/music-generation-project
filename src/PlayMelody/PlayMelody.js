import * as Tone from "tone"
// import { Piano } from "@tonejs/piano"

function PlayMelody(melody) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination()

    let index = 0
    const loop = new Tone.Loop(time => {
        console.log(melody[index])
        synth.triggerAttackRelease(melody[index], "8n", time)
        index += 1
        if (index >= melody.length) {
            index = 0
        }
    }, "4n").start(0)
    Tone.Transport.start()
}

export default PlayMelody