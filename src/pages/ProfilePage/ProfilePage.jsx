import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
// import { Card } from 'react-bootstrap'

const ProfilePage = () => {
    const { user } = useContext(AuthContext)
    return (
        // <Card className="bg-dark text-white">
        //     <Card.Img src={user.image} alt="Card image" />
        //     <Card.ImgOverlay>
        //         <Card.Title>{user.username}</Card.Title>
        //         <Card.Text>
        //             {user.email}
        //         </Card.Text>
        //     </Card.ImgOverlay>
        // </Card>

        <h1>Estás en tu perfil, {user?.username}</h1>
    )
        // :
        // null
}

export default ProfilePage