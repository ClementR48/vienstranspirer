import React from 'react';
import Navbar from '../components/Navbar';

interface HomeProps {

}

const Home = () => {
  return (
    <div className='home_page'>
      <Navbar />
      
      <h1>home page</h1>
    </div>
  );
};

export default Home;