import "./Section.css";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function Section(props) {

    
    // const DropdownHandler = (chordSample) => {

    // }

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
            {(props.title === "Chords") ?
                <div className="options">
                    <DropdownButton onSelect={props.onSampleSelect} variant="secondary" id="dropdown-variants-secondary" key="secondary" menuVariant="dark" title="Chords">
                        <Dropdown.Item eventKey="latenight">Late Night</Dropdown.Item>
                        <Dropdown.Item eventKey="legato">Legato</Dropdown.Item>
                        <Dropdown.Item eventKey="softvintage">Soft Vintage</Dropdown.Item>
                        <Dropdown.Item eventKey="summertime">Summertime</Dropdown.Item>
                        <Dropdown.Item eventKey="vibraphone">Vibraphone</Dropdown.Item>
                    </DropdownButton>
                </div>
            : null}
        </div>
    )
}

export default Section;
