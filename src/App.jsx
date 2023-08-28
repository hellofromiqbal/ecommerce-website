import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import MyCartPage from './pages/myCart';
import CategoriesPage from './pages/categories';
import DetailPage from './pages/detail';
import PaymentPage from './pages/payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categories/:category' element={<CategoriesPage/>}/>
        <Route path='/categories/:category/:id' element={<DetailPage/>}/>
        <Route path='/my-cart' element={<MyCartPage/>}/>
        <Route path='/payment/:id' element={<PaymentPage/>}/>
        <Route path='*' element={<h1 className='text-3xl font-bold'>404 Page Not Found</h1>}/>
      </Routes>
    </Router>
  )
};

export default App;
