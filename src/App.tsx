import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductPage from './components/ProductPage/ProductPage';
import { setProductInformation } from './redux/productSlice';
import { fetchNutribulletData } from './utils/mockData';

import './App.css';
import Banner from './components/Banner/Banner';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const productInformation = await fetchNutribulletData();
        dispatch(setProductInformation(productInformation));
      } catch (error) {
        /* Some component to handle this */
        console.error(error);
      }
    }

    fetchProductInformation();
  }, []);
  return (
    <div id='app'>
      <Banner />
      <ProductPage />
    </div>
  );
}

export default App;
