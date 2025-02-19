import OrderDetails from "@/app/ui/card/OrderDetails";
import Payment from "@/app/ui/card/Payment";


const CartPage = () => {
  return(
    <div className="p-2 flex flex-col w-full">
      <h2 className="text-3xl">Welcome Mr. X</h2>
      <p className="text-xl text-zinc-600 pt-2">
        Thanks a lot for your purchase. Please complete the checkout process by paying for your order.
      </p>


      <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10">
        <OrderDetails />
        <Payment />
      </div>
    </div>
  )
}


export default CartPage;