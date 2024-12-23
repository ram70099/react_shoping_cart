import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import Product from '../Product/Product';



function Navbar() {
    const [categories, setCategories] = useState([]);
    const { categoryId } = useParams();
    const [auth, setAuth] = useState(false); 

    useEffect(() => {
       
            fetch('http://localhost/Learning.php/Laravel_project/laravel_shoping_cart/public/api/category')
            .then((response) => response.json())
            .then((data) => setCategories(data.categories))          
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(true); 
        }
    }, []);



    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                        data-toggle="collapse"
                        href="#navbar-vertical"
                        style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}
                    >
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav
                        className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                        id="navbar-vertical"
                    >
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                                </a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="#" className="dropdown-item">
                                        Men's Dresses
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Baby's Dresses
                                    </a>
                                </div>
                            </div>
                            {categories.map((category) => (
                                <Link key={category.id} to={`/shop/${category.id}`} className="nav-item nav-link">
                                {category.categoryname}
                              </Link>
                              
                            ))}

                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="/" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper
                            </h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <a href='/shop' className="nav-item nav-link">Shop</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                        <a href="#" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                {auth ? (<Link to="/logout" className="nav-item nav-link">Logout</Link>) :
                                    (<>  <Link to="/login" className="nav-item nav-link">Login</Link>
                                        <Link to="/register" className="nav-item nav-link">Register</Link></>
                                    )}
                            </div>
                        </div>
                    </nav>
                    <Product  categoryId={categoryId}/>
                </div>
            </div>
        </div>
    );
}
export default Navbar;