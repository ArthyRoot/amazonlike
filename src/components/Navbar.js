import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            <Link to="/">
                <img src={logo} class="navbar-brand" />
            </Link>
            <ul class="navbar-nav align-items-center">
                <li class="nav-items ml-5">
                    <Link to="/" class="nav-link">
                        products
                    </Link>
                </li>
            </ul>
            <Link to ="/cart" class="ml-auto">
                <button>
                    <span class="mr-2">
                    <i class="fas fa-cart-plus"></i>
                    </span>
                    my cart
                    </button>
            </Link>
      </nav>
    )
  }
}

const ButtonContainer = styled.button 