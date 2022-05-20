import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './../../components/LoginForm/LoginForm'
import './LoginPage.css'


const LoginPage = () => {

    return (

        <div className='login'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Inicio sesion</h1>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage