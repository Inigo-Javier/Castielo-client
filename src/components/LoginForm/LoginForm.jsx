import { Form, Button } from "react-bootstrap"
import { useContext, useState } from "react"
import authService from './../../services/Auth.service'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/inicio')
                // setShowMessage(true)
                // setMessageInfo({ title: 'Éxito', body: 'Sesión iniciada correctamente' })
                // closeModal()
            })
            .catch(err => console.log(err)
                // setShowMessage(true)
                // setMessageInfo({ title: 'Atención', body: err.response.data.message })
            )
    }


    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
            </Form.Group>

            <Button variant="dark" type="submit">Accede a tu cuenta</Button>
        </Form>

    )
}

export default LoginForm


// auth context
// route verify
// boton de logOut()