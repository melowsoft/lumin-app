
import React, {Component, useState, useEffect} from "react"
import styled from "styled-components";
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection';
import { useQuery, gql } from '@apollo/client';





function App() {

  const [menuStatus, menuStatusSetter] = useState('open')
  const [style, styleSetter] = useState('menu')
  const [currency, currencySetter] = useState('USD')
  const [products, productsSetter] = useState([])
  const [ currencies, currenciesSetter ] = useState([])
  const [cartTotal, cartTotalUpadate] = useState(0)

  const GET_PRODUCTS = gql`
  {
  products {
    id,
    title,
    image_url,
    price(currency: ${currency})
  }
}
`

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS)


 useEffect(() => {

    if(data && data.products){
        productsSetter(data.products)
    }

  })


 const updateCurrency = (currency) => {
   console.log("i got here", currency)
    currencySetter(currency)
    refetch()
 }

 const cartTotalCalc = (prods) => {
    const res = prods.map(prod => prod.quantity).reduce((a,b) => a + b )
   return cartTotalUpadate(res);
 }


 const addToCart = (id) => {
  const cartData = JSON.parse(localStorage.getItem("cart"))
  if (cartData)
  console.log(cartData, "data now")

  for(var i = 0; i < cartData.length; i++) {
      if (cartData[i].id === id) {
          cartData[i].quantity = cartData[i].quantity + 1
          break;
      }

      cartData.push({id: id, quantity: 1})
  }

  return localStorage.setItem("cart", JSON.stringify(cartData))        
}


  const switcher = () => {
  switch(menuStatus)
  {
    case "open":
      menuStatusSetter('close')
      styleSetter("menu active")
      return;
    case "close":
      menuStatusSetter('open')
      styleSetter("menu")
      return;
  }
 }


  return (
    <div className="App">

      <Header toggler={switcher} cartTotal={cartTotal}/>
      <HeroSection />
      <ProductsSection loading={loading} products={products} 
      currency={currency}
      switcher={switcher}
      
      />
     
      <Cart 
      style={style} 
      toggler={switcher}
      currency={currency}
      updateCurrency={updateCurrency}
      products={products}
      cartTotalCalc={cartTotalCalc}
        />
    </div>
  );
} 


export default App;
