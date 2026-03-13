import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import { Slide, ToastContainer } from 'react-toastify'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        theme='dark'
        transition={Slide}
      />
    </AuthProvider>
  )
}

export default App
