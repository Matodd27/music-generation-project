import "./Section.css";

function Section(props) {

    // Gets the options for the given instrument and makes an array of list items
    let optionsList = []
    props.options.forEach((option, index) => {
        optionsList.push(<li key={index}>{option}</li>)
    })

    return (
        <div className="section">
            <div className="title">
                {/* Take the title from props */}
                <h1>{props.title}</h1>
            </div>
            <div className="step">
                {/* Check whether section needs a step view */}
                {props.step === true &&
                    <p>step</p>
                }
            </div>
            <div className="options">
                <ul>
                    {/* Display the list of options */}
                    {optionsList}
                </ul>
            </div>
        </div>
    )
}

export default Section;