import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="row">
          <div className="col text-center banner-content">
            <h2>Food is Ready for you, Order...</h2>
            <div className="banner-input">
              <input type="text" placeholder="Search food items" id="txtFoodSearch" />
              <button className="primary-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
