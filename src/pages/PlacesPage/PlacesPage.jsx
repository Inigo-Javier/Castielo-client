import './PlacesPage.css'
import { Container } from 'react-bootstrap'
import PlacesList from './../../components/PlacesList/PlacesList'
import { Modal, Button } from 'react-bootstrap'
import NewPlaceForm from '../../components/NewPlaceForm/NewPlaceForm'
import { useEffect, useState } from 'react'
import placesService from './../../services/Places.services'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

const PlacesPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [places, setPlaces] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        loadPlaces()
    }, [])

    const loadPlaces = () => {

        placesService
            .getAllPlaces()
            .then(({ data }) => {
                // console.log(data)
                setPlaces(data)
            })
            .then(err => console.log(err))
    }

    const fireFinalActions = () => {
        closeModal()
        loadPlaces()
    }

    return (
        <>
            <Container>
                <h1>listado de lugares</h1>
                <Button onClick={openModal}>Registrar nuevo lugar</Button>
                <hr />
                <PlacesList places={places} />
            </Container>

            {
                isLoggedIn
                    ?
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Registra un nuevo lugar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewPlaceForm fireFinalActions={fireFinalActions} />
                        </Modal.Body>
                    </Modal>
                    :
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Inicia sesión para acceder</Modal.Title>
                        </Modal.Header>
                    </Modal>
            }
        </>
    )
}

export default PlacesPage