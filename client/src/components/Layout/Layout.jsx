import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component from react-hot-toast
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toastify

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '75vh' }}>
        {/* Apply custom styling to the toast container */}
        <Toaster
          position="top-right" // Set the position to "top-right" instead of using the constant
          autoClose={3000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          progress={false}
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce-App-shop now',
  description: 'mern stack project',
  keywords: 'mongodb, mern, react, node',
  author: 'sakshi',
};

export default Layout;
