import * as tf from "@tensorflow/tfjs"
import ModelConnect from "./ModelConnect.js"
import ModelPredict from "./ModelPredict.js"

async function GenerateMelody(length) {
    let melody = []

    // Get JSON file containing all the inputs given to the network
    const network_input = require("../network_input.json")
    // Get JSON file allowing to convert from index to note values
    const int_to_note = require("../int_to_note.json")

    // Connect to model
    const model = await ModelConnect()

    let output_array = []
    // Divide each element in the pattern by the number unique notes in the input
    let pattern = network_input[0].map(x => [x[0] / 391.0])
    let patternTensor
    let index = 0
    let result = ""
    for (let i = 0; i < length; i++) {
        // Use the ModelPredict function to find what the next note should be
        patternTensor = tf.tensor([pattern])
        output_array = await ModelPredict(model, patternTensor)
        index = await tf.argMax(output_array, 1).array()
        
        // Convert this into a note value and push it to the finished melody array
        result = int_to_note[index]
        melody.push(result)

        // Remove the first element and add the note that has just been predicted on to the end of the sequences
        pattern.push([index / 391.0])
        pattern = pattern.slice(1)
    }
    return melody
}

export default GenerateMelody;
