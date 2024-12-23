import React, { useState, useEffect } from "react"; // Import useState and useEffect from React
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert for alerting errors or success

const ProductDetail = () => {
    const { id ,quantity} = useParams(); // Get product id from route parameters
    const [product, setProduct] = useState(null); // Set product to null initially

const fetchProductDetails = async (id, token) => {
    const url = `http://localhost:8000/api/buynow/${id}`; 
       fetch(url, {
            method:'POST', 
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                quantity: quantity, 
            },
        });
   
};

useEffect(() => {
    const loadProduct = async () => {
        const token = localStorage.getItem('token');
        const productData = await fetchProductDetails(id, token, );
         Swal.fire({
                title: "Order Successful",
                text: "Your order has been placed successfully.",
                icon: "success",
              }); // Use POST method here
        setProduct(productData); // Set the product in state
    };

    loadProduct(); 
}, []); 

    
    return (
        <div className="container-fluid py-5">
            <Navigate to={`/product/${id}`} />
    </div>
    
    );
};

export default ProductDetail;
