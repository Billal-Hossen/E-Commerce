import React from 'react';

export default function ProductDetails({ product }) {
    console.log(product);
    return (
        <div className="col my-2">
            <div className="card h-100">
                <img src={product.img} className="card-img-top" style={{ width: '100%', height: '280px' }} alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
                <div className="card-footer">
                    <div class="d-flex justify-content-between">
                        <h5 className="my-auto">${product.price}</h5>
                        <button type="button" class="btn btn-success">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
