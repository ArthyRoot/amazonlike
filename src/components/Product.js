import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return(
            <div>
               <Product>
                    <div>
                        <div onClick={console.log('clicked')}>
                            <Link to="/details">
                                <img src={img} alt="product"></img>
                            </Link>
                        </div>
                    </div>
               </Product>
            </div>
        );
    }
}
