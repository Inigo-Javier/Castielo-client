import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import placesService from '../../services/Places.services'
import uploadService from '../../services/upload.service'
import Loader from '../Loader/Loader'


const NewPlaceForm = ({ fireFinalActions }) => {

    const [placesData, setPlaceData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        type: '',
        village: '',
        country: '',
        street: '',
        lat: '',
        lng: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setPlaceData({ ...placesData, imageUrl: data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }
    const { title, description, imageUrl, type, village, country, street, lat, lng } = placesData

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        setPlaceData({
            ...placesData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        placesService
            .savePlace(placesData)
            .then(() => {
                console.log(placesData)
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre del lugar</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Cuentanos qué te pareción el lugar" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" placeholder='Ponle imagen al lugar' value={imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="enum">
                <Form.Label>Tipo de lugar</Form.Label>
                <Form.Select value={type} onChange={handleInputChange} name="type">
                    <option value="vineyard">vineyard</option>
                    <option value="historic building">historic building</option>
                    <option value="landscapes">landscapes</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="village">
                <Form.Label>village</Form.Label>
                <Form.Control type="text" value={village} onChange={handleInputChange} name="village" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
                <Form.Label>country</Form.Label>
                <Form.Control type="text" value={country} onChange={handleInputChange} name="country" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="street">
                <Form.Label>street</Form.Label>
                <Form.Control type="text" value={street} onChange={handleInputChange} name="street" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="coordinates">
                <Form.Label>latitud</Form.Label>
                <Form.Control type="number" value={lat} onChange={handleInputChange} name="lat" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="coordinates">
                <Form.Label>longitud</Form.Label>
                <Form.Control type="number" value={lng} onChange={handleInputChange} name="lng" />
            </Form.Group>

            {/* <Button variant="dark" type="submit">
                Registrar lugar
            </Button> */}
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? <Loader /> : 'Registra lugar'}</Button>
        </Form >
    )
}

export default NewPlaceForm