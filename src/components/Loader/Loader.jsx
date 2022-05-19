import { Spinner } from 'react-bootstrap'
import './Loader.css'

const Loader = () => {

    return (
        <Spinner animation="border" role="status" className="loader">
            <span className="visually-hidden">Loading...</span>
            {/* <span className="loader"></span> */}
        </Spinner>
    )
}

export default Loader