import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './../../components/LoginForm/LoginForm'

const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 33 }}>
                    <hr />
                    <h1>Inicio sesion</h1>
                    <hr />
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage