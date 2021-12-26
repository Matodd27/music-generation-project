import * as tf from "@tensorflow/tfjs"

async function ModelConnect() {
    // Retrieve model from HTTP server
    const model = tf.loadLayersModel("http://localhost:9000/model.json");

    return model
}

export default ModelConnect;