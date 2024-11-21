import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/Header/ScrollToTop'; // Import ScrollToTop

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ScrollToTop /> {/* Add ScrollToTop to reset scroll on route change */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
