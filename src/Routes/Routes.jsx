import { Routes as Router, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Pages/About'
import CollectionDetails from '../Components/CollectionDetails/CollectionDetails'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Cart from '../Components/Cart/Cart'
import ContactUs from '../Pages/ContactUs'
import Categories from '../Pages/Categories'
import Men from '../Components/Collection/men'
import Women from '../Components/Collection/women'
import Kids from '../Components/Collection/kids'
import Accessories from '../Components/Collection/Accessories'
import Foot from '../Components/Collection/foot'
import Sport from '../Components/Collection/sport'
import Payment from '../Components/Payment/Payment'

const Routes = () => {
  return (
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collectionDetails/:id" element={<CollectionDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/foot" element={<Foot />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/payment" element={<Payment />} />
       
        
      </Router>
  )
}

export default Routes