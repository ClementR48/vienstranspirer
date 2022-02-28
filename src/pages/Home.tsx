import React from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';


interface HomeProps {

}

const Home = () => {



  return (
    <div className='home_page'>
      <Navbar />
      <Menu />
      <h1>home page</h1>
    </div>
  );
};

export default Home;