import './Navigation.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'



const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        logOutUser()
        navigate('/inicio')
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="inicio">Castielo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            isLoggedIn
                                ?
                                <>

                                    <NavLink to="/mapas" className='nav-link active'>Mapa</NavLink>


                                    <NavLink to="/lugares" className='nav-link active'>Lugares</NavLink>


                                    <NavLink to="/video" className='nav-link active'>conócenos</NavLink>

                                    {user && <NavLink to="/perfil" className='nav-link active'>Bienvenido/a, {user.username}</NavLink>}
                                </>
                                :
                                <>
                                    {/* modal */}

                                </>
                        }

                        {
                            isLoggedIn
                                ?
                                <div className='nav-link active' onClick={logout}>Cerrar sesión</div>
                                :
                                <>
                                    <NavLink to="/registro" className='nav-link active'>Registro</NavLink>
                                    <NavLink to="/inicio-sesion" className='nav-link active'>Sesión</NavLink>
                                    <NavLink to="/lugares" className='nav-link active'>Lugares</NavLink>
                                </>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation