import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Routes from './Routes/Routes'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <Header />
      <Routes />
      <Footer />
    </CartProvider>
    
  )
}

export default App





// In your router configuration

