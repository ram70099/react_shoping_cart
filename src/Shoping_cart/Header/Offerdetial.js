import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{ padding: 30 }}>
              <p className="text-right">15 Products</p>
              <a href="#" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src="img/cat-1.jpg" alt="Men's dresses" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{ padding: 30 }}>
              <p className="text-right">15 Products</p>
              <a href="#" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src="img/cat-5.jpg" alt="Bags" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{ padding: 30 }}>
              <p className="text-right">15 Products</p>
              <a href="#" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src="img/cat-6.jpg" alt="Shoes" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
