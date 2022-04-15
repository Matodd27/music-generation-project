import "./Section.css";
import Dropdown from "react-bootstrap/Dropdown"

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
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Section;
