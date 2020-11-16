import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client';
import Loader from './Loader';



const GET_PRODUCTS = gql`
  {
  products {
    id,
    title,
    image_url,
    price(currency: NGN)
  }
}
`


function ProductsSection ({products, loading, currency, switcher}) {

     if (loading) return <Loader />;
       
 
     const addToCart = (id) => {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        console.log(cartData, "cart data")
        if(cartData.length == 0){
             cartData.push({id: id, quantity: 1})
             return localStorage.setItem("cart", JSON.stringify(cartData)) 
        }
        
        let found = false;

        for(let i = 0; i < cartData.length; i++) {
            if (cartData[i].id == id) {
               found = true;
                break
            }
        }

        if(found){
            for(let i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData[i].quantity++
                }
            }
        } else {
           
            cartData.push({id: id, quantity: 1})
        }
        

        return localStorage.setItem("cart", JSON.stringify(cartData))  
                  
     }
    

    return (
       <ProductSectionWrap>
           {
              products ? products.map(product => (
                <div className="single-product" key={product.id}>
                <div className="product-image-container">
                   <img src={product.image_url} alt="product" className="product-image"/>
                </div>
               <h3 className="product-title">{product.title}</h3>
               <p className="single-product-price">From {`${currency}${product.price}`}</p>
                <div className="button-wrap">
                    <div onClick={() =>  {
                        addToCart(product.id)
                        switcher()
                        }} className="action-button"> Add to Cart </div>
                </div>
           </div>
               ))
               : <p>Loading...</p> 
           }
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

    .single-product .single-product-price {
        margin-top: 10px;
    }

    .single-product .product-image-container .product-image {
    font-size: 20px;
    font-family: FF Bau Medium, san-serif;
     margin-bottom: 30px; 
    padding: 0 15px;
    max-height: 180px;
    width: 100%;
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