import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Machine.css";
import vendingMachineImg from "./wallpaper.jpg";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>hello i am your Naina.  would you like to eat me ?</h1>
        </Message>
        <Message>
          <h1>
            <Link to='/Tiger'>Tiger</Link>
          </h1>
          <h1>
            <Link to='/Star'>Star</Link>
          </h1>
          <h1>
            <Link to='/Love'>Love</Link>
          </h1>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;