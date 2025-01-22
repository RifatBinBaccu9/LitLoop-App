import Image from "next/image";
import { FaWindowRestore } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const BookCard = ({book}) => {
    const {title, cover, stock, sellPrice}= book;
    
  return (
    <div>
        <div className="w-[220px]  bg-white border shadow-lg p-3 rounded-md">
          <div>
            <Image src={cover} alt="cover" width={100} height={100} className="w-[200px] h-[200px]"/>
          </div>
          <h1 className="text-xl font-bold text-center pt-2">{title}</h1>

          <div>
            <div>
            <FaWindowRestore />
              <p>{stock}</p>
            </div>

            <div>
            <FiDollarSign />
              <p>{sellPrice}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookCard