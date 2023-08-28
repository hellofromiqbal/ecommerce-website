import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCartPage = () => {
  const allProducts = useSelector(selectAllProducts);

  const productsOnCart = allProducts.filter((product) => product.amountOnCart > 0);

  const notify = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <>
      <section className='min-h-screen'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <ProductList>
          {productsOnCart.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              callback={notify}
            />
          ))}
        </ProductList>
      </section>
    </>
  );
};

export default MyCartPage;