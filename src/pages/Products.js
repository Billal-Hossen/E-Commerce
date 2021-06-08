import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails'
// import fakeProducts from '../data';

export default function Products() {
    const products=useSelector(state=>state.products.allProductList);
    console.log(products);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ProductDetails key={product.key} product={product} />)
                }
            </div>
        </div>
    )
}