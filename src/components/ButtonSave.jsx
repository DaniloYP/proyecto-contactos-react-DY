import { Link } from "react-router-dom";

const buttonSave = () => {

    return (
        <div className="guardar">
            <button type="button" className="btn btn-primary" onClick={() => handleCreateContact()}>Save</button>
            <Link to="/" className="back">Or get back to contacts</Link>
        </div>
    )
}

export default buttonSave;