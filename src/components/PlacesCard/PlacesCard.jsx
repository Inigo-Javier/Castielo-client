import './PlacesCard.css'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'


const PlacesCard = ({ _id, imageUrl, title, owner }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className="PlacesCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-grid gap-2">
                    <Link to={`/detalles/${_id}`} className='btn btn-dark'>Ver detalles</Link>
                    {owner && owner === user?._id && <Button variant='warning' onClick={() => alert('te lo curras')} >Editar</Button>}
                </div>
            </Card.Body>
        </Card >
    )
}

export default PlacesCard
