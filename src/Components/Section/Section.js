import "./Section.css";

function Section(props) {
    return (
        <div className="section">
            <div className="title">
                {/* Take the title from props */}
                <h1>{props.title}</h1>
            </div>
            <div className="step">
                {/* Check whether section needs a step view */}
                {props.step === true ?
                    <p>step</p>
                : null}
            </div>
            <div className="options">

            </div>
        </div>
    )
}

export default Section;
