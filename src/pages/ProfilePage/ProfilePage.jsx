import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Card, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const ProfilePage = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Card>
                <Card.Header>Portal personal</Card.Header>
                <Card.Body>
                    <Card.Title>¡Hola, {user.username}!</Card.Title>
                    <Card.Text>
                        Bienvenido a tu portal personal:
                    </Card.Text>
                    <Card.Text>
                        este es tu correo electrónico: {user.email}
                    </Card.Text>

                    <Nav className="ms-auto">
                        <Link to="/inicio" className=" btn btn-dark  " >inicio</Link>
                    </Nav>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilePage