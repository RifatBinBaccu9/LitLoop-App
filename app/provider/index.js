"use client"
import { useState } from "react"
import { StoreContext } from "../context";


const StoreProvider = ({children}) => {
    const [cardData, setCartData]= useState([]);

  return (
    <StoreContext.Provider value={{cardData, setCartData}}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider