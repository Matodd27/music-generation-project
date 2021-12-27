import * as Tone from "tone"

function PlayMelody() {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("C4", "8n")
}

export default PlayMelody