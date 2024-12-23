import React from 'react';
import axios from 'axios';

const MyComponent = () => {
  // Retrieve CSRF token from the meta tag in the HTML
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login',  // Replace with your Laravel endpoint
        {
          // Your data here
          name: 'John Doe',
          email: 'john@example.com',
        },
        {
          headers: {
            'X-CSRF-TOKEN': csrfToken,  // Include the CSRF token in the request headers
          },
        }
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyComponent;
