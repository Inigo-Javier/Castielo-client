import './App.css'
import AppRoutes from './../routes/AppRoutes'
import Navigation from './Navigation/Navigation'
import Footer from './../components/Footer/Footer'


const App = () => {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App;
