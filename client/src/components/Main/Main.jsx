import React from 'react';
import {Outlet} from 'react-router-dom';
import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="main min-vh-100 d-flex flex-column">
      <NavigationBar />
      <div className="container flex-grow-1 py-4 px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;