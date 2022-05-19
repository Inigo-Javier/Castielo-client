import { Row, Col } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import PlacesCard from '../PlacesCard/PlacesCard'

const PlacesList = ({ places }) => {

    return (

        places.length
            ?
            <Row>
                {places.map(places => {
                    return (
                        <Col md={{ span: 3 }} key={places._id}>
                            <PlacesCard {...places} />
                        </Col>
                    )
                })}
            </Row>
            :
            <Loader />

    )
}

export default PlacesList