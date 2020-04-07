import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Star.css";

class Sardines extends Component {
  render() {
    return (
      <div
        className='Sardines'
        style={{
          backgroundImage:
            "url(https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/g9a9m-MHM425BWQ9F-Full-Image_GalleryBackground-en-US-1521579412582._SX1080_.jpg)"
        }}
      >
        <Message>
          <h1>you want to see stars .I will take u to the stars</h1>
          <Link to='/'>Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Sardines;