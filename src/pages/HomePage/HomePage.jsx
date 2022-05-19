import './HomePage.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (

        <div className="container1">
            <h1>Bienvenido a la página de Castielo</h1>
            <hr />
            <Link to="/lugares">
                <Button variant="dark" size='lg'>Ir a la galería</Button>
            </Link>
        </div>

        

    )
}

export default HomePage