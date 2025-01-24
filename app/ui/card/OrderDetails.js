'use client'

import { StoreContext } from "@/app/context";
import { useContext } from "react";



const OrderDetails = () => {
  const {cardData} = useContext(StoreContext);

  const bookToBuy = cardData.filter((book) => {
    return book.type === "buy"
  });

  const priceForBuy = bookToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0,
  );

  const bookToRent = cardData.filter((book) => {
    return book.type === "rent"
  });

  const priceForRent = bookToRent.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0,
  );

  return(
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:ml-4 xl:ml-4 2xl:ml-4 lg:mr-4 xl:mr-4 2xl:mr-4">
      <h2 className="text-2xl pb-4">Order Details</h2>
      {
      <ul>
          <li>Buying {bookToBuy.length} book for <strong>{priceForBuy} INR </strong></li>
          <li>Renting {bookToRent.length} book for <strong>{priceForRent} INR</strong></li>
        </ul>
        }

    </div>
  )
}

export default OrderDetails;