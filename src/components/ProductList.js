import React, { Component } from 'react';
import Title from './Title';
import {ProductConsumer} from '../context'; 
import Product from './Product';

export default class ProductList extends Component {
    state= {
        products: [],
    };
    render() {
        return(
            <React.Fragment>
                <div>
                    <div class="container">
                            <Title name="our" title="products" />
                        <div class="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}