async function ModelPredict(model, network_input) {

    // Get the model to make a prediction based off of a random input
    const prediction = model.predict(network_input)
    const output_array = await prediction.array()

    return output_array

}



export default ModelPredict;