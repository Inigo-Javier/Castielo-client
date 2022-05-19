import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import placesService from './../../../services/Places.services'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from './../../../components/Loader/Loader'


function PlacesDetailsPage() {

    const [placeDetails, setPlaceDetails] = useState({})

    const { place_id } = useParams()

    useEffect(() => {

        placesService
            .getOnePlace(place_id)
            .then(({ data }) => setPlaceDetails(data))
            .catch(err => console.log(err))

    }, [])

    return (

        !placeDetails
            ?
            <Loader />
            :
            <Container>
                <h1>Detalles de {placeDetails.title}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Información</h3>
                        <p>{placeDetails.description}</p>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={placeDetails.imageUrl} alt={placeDetails.title} />
                    </Col>
                    <Link to="/lugares">
                        <Button variant="dark">Volver</Button>
                    </Link>
                </Row>
            </Container>
    )
}

export default PlacesDetailsPage