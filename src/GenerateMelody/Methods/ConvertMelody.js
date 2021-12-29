import * as m from "music21j"

async function ConvertMelody(melody) {
    melody = await melody
    let new_note
    let chord
    let output_melody = []
    // Loop through every note or chord in the melody
    melody.forEach(pattern => {
        // Determine whether the element is a chord or a note
        if (pattern.includes(".") || !(isNaN(parseInt(pattern)))) {
            chord = []
            // Split the chord up and create a music21 object for each note
            pattern.split(".").forEach(note => {
                new_note = new m.note.Note(parseInt(note))
                chord.push(new_note)
            })
            output_melody.push(chord)
        } else {    
            // Create a music21 object for the note
            new_note = new m.note.Note(pattern)
            output_melody.push([new_note])
        }
    });

    // For each note or chord convert it from a music21 object into the name of the notes contained within
    for (let i = 0; i < output_melody.length; i++) {
        output_melody[i] = output_melody[i].map(x => x.nameWithOctave)
    }
    
    return output_melody
}

export default ConvertMelody