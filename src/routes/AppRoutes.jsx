import { Routes, Route } from 'react-router-dom'
import PlacesPage from './../pages/PlacesPage/PlacesPage'
import PlacesDetailsPage from './../pages/PlacesDetailsPage/PlacesPage/PlacesDetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from './../pages/LoginPage/LoginPage'
import LoadMap from '../components/googleMaps/loadMap'
import Video from '../components/video/video'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoutes'


const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/inicio' element={<HomePage />} />
                <Route path='/lugares' element={<PlacesPage />} />
                <Route path='/detalles/:place_id' element={<PlacesDetailsPage />} />
                <Route path='/registro' element={<SignupPage />} />
                <Route path='/inicio-sesion' element={<LoginPage />} />
                <Route path='/mapas' element={<LoadMap />} />

                <Route path="/perfil" element={<PrivateRoute />}>
                    <Route path="" element={<ProfilePage />} />
                </Route>

                <Route path='/video' element={<Video />} />
                <Route path='*' element={<HomePage />} />

            </Routes>
        </>
    )
}

export default AppRoutes

