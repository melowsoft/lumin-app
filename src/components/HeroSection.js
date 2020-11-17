import React from 'react'
import styled from 'styled-components';

function HeroSection() {
    return (
        <HeroWrap>
            <div className="hero-header">
                <h2>All Products</h2>
                <p className="caption">A 360° look at Lumin</p>
            </div>

            <div className="hero-filter">
                <select placeholder="Filter by">
                    <option value="single-product" defaultValue>Filter by</option>
                </select>
            </div>
        </HeroWrap>
    )
}

export default HeroSection;

const HeroWrap = styled.div`
    min-height: 300px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 70px 25px 25px;
    background-color: #FCFCF9;
    align-items: flex-end;

    .hero-header {
        padding: 0px 20px 0px 0px;
        margin: 0px 40px;

      .caption {
          margin-top: 50px;
      }
    }

    .hero-filter {
    max-width: 333px;
    width: 100%;
    margin: 0 40px;
    }

    .hero-filter select {
    width: 100%;
    border: 1px solid #CDD1CE;

    background-size: 10px;
    background-position: 95%;
    background-color: transparent;
    padding: 20px;
    font-size: 13px;
    letter-spacing: 0.03px;
    margin-bottom: 35px;
    color: #4B5548;

}
`