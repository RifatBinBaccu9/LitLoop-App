"use client"

import { toast } from "react-toastify";

const AddToRent = ({book}) => {
  const handelClick= (event, res) =>{
   event.preventDefault();
   console.log(book);
   const newData = {...book, typr: res};
   toast.success(`Add to ${newData.title} card`);
  }
  return (
    <div>
       
         <div className="flex justify-around mt-3 border-t-2 p-1">
         <button onClick={(event)=> handelClick (event, 'buy')}
        className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
         Buy Now
      </button>
      <button onClick={(event)=> handelClick (event, 'rent')}
        className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
        To Rent 
      </button>
    </div>
    </div>
  )
}

export default AddToRent