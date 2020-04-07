import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "./tiger.jpg";
import "./Tiger.css";

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
        <img src={sodaImg} alt='coca cola can' />
        <Message>
          <h1>No Comments</h1>
          <h3> he he he he </h3>
          <p>(I  miss you)</p>
          <Link to='/'>Go Back</Link>
        </Message>

        <img src={sodaImg} alt='coca cola can' />
      </div>
    );
  }
}

export default Soda;