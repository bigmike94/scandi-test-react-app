import React from 'react';
import './products.css';
function Products({products}) {
    let productsList;
    if (products===null) return <div>Loading...</div>;
    productsList = products.map((product, index)=>{
        return (
            <div className="product-item" key={index}>
                <input type="checkbox" value={product.sku} className="delete-checkbox" />
                <div className="product-desc">
                    <div>{product.sku}</div>
                    <div>{product.product}</div>
                    <div>{product.price}<span>$</span></div>
                    <div>{product.property}:{product.property_value}{product.units}</div>
                </div>
            </div>
        );
    });
    return (
        <div id="products-wrapper">
            {productsList}
        </div>
    );
}
export default Products;