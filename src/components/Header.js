import React from 'react'
import styled from "styled-components"
import { breakpoint } from "./style-utils";

function Header({toggler}) {
    return (
            <HeaderWrap>
                <div className="header-content">
                    <nav className="nav-section">
                        <a href="#" className="nav-item">
                            <img src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/logo-dark_ec479ecc-793e-4643-bd5b-bac40a841493.png?v=1598617182" alt="logo" className="logo"/>
                        </a>
                        <a href="#" className="nav-item">Shop</a>
                        <a href="#" className="nav-item">Help</a>
                        <a href="#" className="nav-item">Blog</a>
                    </nav>
                    <nav className="nav-section">
                        <a href="#" className="nav-item">Account</a>
                        <div onClick={() => toggler()} className="nav-item cart-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/Image_1_2x_5f1251f7-a674-4496-92be-9cca5561534e.png?v=1581352198" className="cart-icon"/>
                        <div>0</div>
                        </div>
                        
                    </nav>
        
                </div>
            </HeaderWrap>
    )
} 

export default Header;

const HeaderWrap = styled.div`


  
    box-shadow: 0 2px 3px -3px grey;

    .header-content{
    margin-left: 40px;
    margin-right: 40px;
    padding: 18px 20px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-section {
     display: flex;
        align-items: center;

        .nav-item {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: #2b2e2b;
            color: #000;
            margin-right: 20px;
            padding: 5px 10px;
            transition: color .3s ease-in-out;

            .cart-icon {
             width: 50%;
            }

            .logo {
                width: 170px;
                height: 48px;
            }
        }

        .cart-flex {
            display: flex;
            cursor: pointer;
        }
    }
    }



   ${breakpoint.sm`
     padding-left: 0;
    padding-right: 0;
    margin-left: 40px;
    margin-right: 40px;
   `}
`