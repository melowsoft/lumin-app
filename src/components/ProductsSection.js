import React from 'react'
import styled from 'styled-components'

function ProductsSection () {
    return (
       <ProductSectionWrap>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
           <div className="single-product">
                <div className="product-image-container">
                   <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="product" className="product-image"/>
                </div>
                <h3 className="product-title">Age Management Set</h3>
                <p className="single-product-price">From $52.00</p>
                <div className="button-wrap">
                    <div className="action-button"> Add to Cart </div>
                </div>
           </div>
       </ProductSectionWrap> 
    )
}

export default ProductsSection;

const ProductSectionWrap = styled.div`
    padding: 25px;
    background-color: #E2E6E3;
    display: flex;
    flex-wrap: wrap;

    .single-product {
     text-align: center;
    padding: 50px 30px;
    min-height: 50px;
    flex: 0 0 33.33%;
    }

    .single-product .product-image-container .product-image {
    font-size: 20px;
    font-family: FF Bau Medium, san-serif;
     margin-bottom: 30px; 
    padding: 0 15px;
    max-height: 180px;
    object-fit: contain;
    }

    .button-wrap .action-button {
     padding: 14px 11px;
    border: 0.5px solid #4B5548;
    width: calc(50% - 5px);
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    background: #4B5548;
    color: #FCFCF9;
    }

    .button-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`