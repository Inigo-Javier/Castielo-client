import './HomePage.css'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (

        <div className="container1">
            <h1>Bienvenido a la página de Castielo</h1>
            <hr />
            <Row>
                <Col lg={2} className="mx-auto m-0 mt-1">
            <Link to="/lugares" className='d-block btn btn-dark text-center  '>Ir a la galería</Link>
                </Col>
            </Row>
        </div>


    )
}

export default HomePage