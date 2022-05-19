import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 33 }}>
                    <Link to="/inicio">
                        <Button variant="dark" type="submit">vuelve al inicio</Button>
                    </Link>
                    <hr />
                    <h1>Registro</h1>
                    <hr />
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage