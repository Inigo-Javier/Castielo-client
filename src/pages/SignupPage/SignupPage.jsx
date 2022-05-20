import { Container, Row, Col } from 'react-bootstrap'

import SignupForm from '../../components/SignupForm/SignupForm'
import './SignupPage.css'

const SignupPage = () => {

    return (
        <div className='registro'>
            <Container >
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registro</h1>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignupPage