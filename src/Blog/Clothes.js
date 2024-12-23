// Home.js
import React from "react";
import Header from './Common/Header'; 
import Footer from './Common/Footer'; 
import './css/home.css';           

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id="blogs" className="hero-blogs">
          <h2>Cloths Blogs</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <img src="/images/cloth1.jpg" alt="Blog 1" />
              <h3>Exploring Cloths</h3>
              <p>Immerse yourself in the beauty of the natural world...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
            <div className="blog-card">
              <img src="/images/cloth2.jpg" alt="Blog 2" />
              <h3>City Life Adventures</h3>
              <p>Discover the bustling life of modern cities...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
            <div className="blog-card">
              <img src="/images/cloth3.jfif" alt="Blog 3" />
              <h3>Tech Innovations</h3>
              <p>Stay updated with the latest in technology...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
            <div className="blog-card">
              <img src="/images/cloth4.png" alt="Blog 4" />
              <h3>Culinary Delights</h3>
              <p>Explore delicious recipes and food stories...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
            <div className="blog-card">
              <img src="/images/cloth5.png" alt="Blog 5" />
              <h3>Travel Diaries</h3>
              <p>Adventures and tips from around the globe...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
            <div className="blog-card">
              <img src="/images/cloth6.jpg" alt="Blog 6" />
              <h3>Health and Wellness</h3>
              <p>Guidance for a healthy and fulfilling life...</p>
              <a href="#" className="btn btn-secondary">Read More</a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Home;
