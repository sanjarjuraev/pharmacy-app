import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <header className='bg-blue-600 text-white p-4'>
        <div className='container mx-auto'>Pharmacy E-Commerce</div>
      </header>
      <main className='flex-grow container mx-auto p-4'>{children}</main>
      <footer className='bg-gray-800 text-white text-center p-4'>
        <div className='container mx-auto'>© 2024 Pharmacy E-Commerce</div>
      </footer>
    </div>
  );
};

export default Layout;
