import React from 'react';
import TopBar from './Header/Topbar';
import Header from './Header/Header';
import Offerdetial from './Header/Offerdetial';
import Footer from './Footer/Footer';


function App() {
  return (
    <div>
      <TopBar />
        <div className="row border-top px-xl-5">
        <Header />
        </div>
      <Offerdetial/>
      <div className="container-fluid pt-5">
      </div>
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/product-1.jpg" alt="Spring Collection" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                <a href="#" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/product-27.jpg" alt="Winter Collection" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                <a href="#" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
      <Footer/>
    </div>
  );
}

export default App;
