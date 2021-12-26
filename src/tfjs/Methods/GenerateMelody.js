import * as tf from "@tensorflow/tfjs"
import ModelConnect from "./ModelConnect.js"
import ModelPredict from "./ModelPredict.js"

async function GenerateMelody(length) {

    // Get JSON file containing all the inputs given to the network
    const network_input = tf.tensor([require("../network_input.json")[0]])

    // Connect to model
    const model = await ModelConnect()

    const output_array = await ModelPredict(model, network_input)

    const ouptputArgMax = await tf.argMax(output_array, 1).array()
    console.log(ouptputArgMax)
}

export default GenerateMelody;
