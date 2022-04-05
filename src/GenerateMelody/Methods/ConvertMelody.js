import * as m from "music21j"

async function ConvertMelody(melody) {
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
                // Convert each note into the correct form and push it to the array
                chord.push(new_note.nameWithOctave)
            })
            // Add the chord into the output array
            output_melody.push(chord)
        } else {    
            // Add the note in its own array into the output_melody array
            output_melody.push([pattern])
        }
    });
   
    return output_melody
}

export default ConvertMelody