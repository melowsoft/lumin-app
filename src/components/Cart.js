import React from 'react'
import styled from "styled-components"

function Cart({style, toggler}) {
    return (
    <CartWrap className={style}>
        <div className="container">
        </div>
     
        <div className="right-cart">
            <div className="cart-top">
                <div className="button-wrap">
                <div className="button" onClick={() => toggler()}>
                    <i className="fas fa-angle-right"></i>
                </div>
                </div>

                <div className="title-wrap">
                    <h5 className="cart-title">YOUR CART</h5>
                </div>
                <div className="empty-wrap">
                    <div></div>
                </div>
            </div>

            <div className="currency-row">
                <select className="currency-select" style={{maxWidth: 80}}>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                </select>
            </div>

            <div className="cart-body">
                <div className="cart-items-list">
                    <div className="cart-item">
                        <div className="product-description">
                              <span className="remove-product" style={{cursor: "pointer"}}>x</span>  
                              <h6>Age Management Set</h6>
                              <div><span className="ff-bau-medium">MADE FOR:</span> mac</div>
                              <div>Combination | 25-34</div>
                              <div className=""><span className="d-block">Two Month <span>supply shipped every two months</span>.
                              </span><span>Cancel or change frequency anytime</span></div>
                              <div className="d-none"><span>One time purchase of</span> Two Month <span>supply</span>.</div>
                              <div className="quantity"><div className="quantity-selector"><span className="counter-action decrement">-</span><span className="counter-number counter"> 1 </span>
                              <span className="counter-action increment">+</span></div><div className="price">NGN&nbsp;20,000.00</div></div>
                        </div>

                        <div className="product-image">
                            <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="Product Image" className="image"/>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="product-description">
                              <span className="remove-product" style={{cursor: "pointer"}}>x</span>  
                              <h6>Age Management Set</h6>
                              <div><span className="ff-bau-medium">MADE FOR:</span> mac</div>
                              <div>Combination | 25-34</div>
                              <div className=""><span className="d-block">Two Month <span>supply shipped every two months</span>.
                              </span><span>Cancel or change frequency anytime</span></div>
                              <div className="d-none"><span>One time purchase of</span> Two Month <span>supply</span>.</div>
                              <div className="quantity"><div className="quantity-selector"><span className="counter-action decrement">-</span><span className="counter-number counter"> 1 </span>
                              <span className="counter-action increment">+</span></div><div className="price">NGN&nbsp;20,000.00</div></div>
                        </div>

                        <div className="product-image">
                            <img src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png" alt="Product Image" className="image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-footer">
                    <div className="cart-subtotal">
                        <span>Subtotal</span>
                        <div className="subtotal-price">NGN&nbsp;20,000.00<div className="" style={{fontSize: 10}}>every 2 months</div></div>
                    </div>

                    <div className="cart-buttons">
                    <button type="button" className="subscription-btn">
                    <span className="d-none">MAKE THIS A SUBSCRIPTION (SAVE 20%)</span></button>
                    <button type="submit" className="checkout-btn">PROCEED TO CHECKOUT</button>
                    </div>
            </div>
        </div>
        
       
    </CartWrap>
    )
}

export default Cart;

const CartWrap = styled.div`

.container {
    width: 100%;
    height: 100%;
    background-color: #6e7b70;
    opacity: 0.38;
}

.button-wrap {
    flex: 1;
    width: 33.3%;
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
}
.title-wrap {
    flex: 1;
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    .cart-title {
     color: #696969;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: normal;
    font-size: 10px;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.2;
    }
}
.empty-wrap {
    flex: 1;
    width: 33.3%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.button-wrap .button {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
    border: 1px solid #d4d2d2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 500;
    
}

.right-cart {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #f2f2ef;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: auto;
    max-width: 550px;
    width: 100%;
    z-index: 1500;
    opacity: 1;
}

.right-cart .cart-top {
    display: flex;
    flex-direction: row;
    margin-bottom: 70px;
}
.right-cart .cart-body {
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    flex: 1;
    overflow-y: auto;

    .cart-items-list {
        margin-top: 10px;

        .cart-item {
            display: flex;
            flex-wrap: wrap;
            min-height: inherit;
            max-height: inherit;
            justify-content: space-between;
            position: relative;
            margin-bottom: 20px;
            background: #fff;
        }

     .cart-item .product-description {
        color: #1e2d2b;
        width: 65%;
        line-height: 18px;
        font-size: 10px;
        padding: 15px 13px 13px 21px;
        letter-spacing: .02px;

            .quantity {
                font-size: 100%;
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center; 

                .quantity-selector {
                    border: .5px solid #bcbcbc;
                    padding: 7px;
                    width: 76px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .counter-action {
                        cursor: pointer;
                        color: #000;
                        font-size: 15px;
                    }
                }

                .price {
                    float: right;
                    padding: 0 10px;
                    width: inherit;
                    font-size: 13px;
                    letter-spacing: .03px;
                }
            }

            .remove-product {
                float: right;
                padding-right: 5px;
                position: absolute;
                right: 27px;
                margin-top: -10px;
                margin-right: -20px;
                font-size: 20px;
                opacity: .7;
                cursor: pointer;
                color: #000; 
            }
        }
     .cart-item .product-image {
            background-color: #fdfdfd;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #1e2d2b;
            width: 33.3%;
            padding-right: 15px;

            .image {
                overflow: hidden;
                height: 80px;
                width: auto;
                -o-object-fit: contain;
                object-fit: contain;
            }
        }
    }
}
.right-cart .cart-footer {
    border-top: 1px solid #d0d0d0;
    box-shadow: 0 -4px 12px rgba(0,0,0,.15);
    z-index: 1;
    padding: 0 20px 20px;
}

.cart-footer .cart-subtotal {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 0 solid #6e7b70;
    border-top: none;

    .subtotal-price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}

.cart-footer .cart-buttons {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    .subscription-btn {
        font-size: 12px;
    font-weight: 400;
    font-style: normal;
    padding: 16px 20px;
    text-align: center;
    text-decoration: none;
    color: #2b2e2b;
    letter-spacing: .96px;
    border: 1px solid #2b2e2b;
    background-color: #fff;
    cursor: pointer;
    }

    .checkout-btn {
     font-size: 12px;
    font-weight: 400;
    font-style: normal;
    padding: 16px 20px;
    text-align: center;
    text-decoration: none; 
    color: #fff;
    letter-spacing: 2px;
    background-color: #4b5548;
    border: none;
    margin-top: 15px;
    cursor: pointer;
    }
}

.right-cart .currency-row {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;

    .currency-select {
    
    cursor: pointer;
    padding: 10px 2em 10px 8px;
    -webkit-padding-end: 30px;
    background-size: 17px 5px;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    border: none;
    }
}


    
`