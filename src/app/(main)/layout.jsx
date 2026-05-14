import React from 'react';
import Banner from '../components/Home/Banner';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Mainlayout;