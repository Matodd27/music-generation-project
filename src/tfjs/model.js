import * as tf from "@tensorflow/tfjs";

async function Model() {

    const network_input = tf.tensor([require("./network_input.json")[0]])

    const model = await tf.loadLayersModel("http://localhost:9000/model.json");
    const prediction = model.predict(network_input)
}

export default Model;