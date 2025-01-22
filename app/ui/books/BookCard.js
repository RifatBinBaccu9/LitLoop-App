import Image from "next/image";
import { FaWindowRestore } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import AddToRent from "./AddToRent";
import Link from "next/link";

const BookCard = ({ book }) => {
  const { id, title, cover, stock, sellPrice } = book;

  return (
    <div>
      <Link href={`/store/${id}`}>
        <div className="w-[240px] bg-white border shadow-lg p-3 rounded-md">
          <div>
            <Image
              src={cover}
              alt="cover"
              width={100}
              height={100}
              className="w-[230px] h-[300px]"
            />
          </div>
          <h1 className="text-xl font-bold text-center py-3">{title}</h1>

          <div className="flex justify-between mb-3">
            <div className="flex gap-1">
              <FaWindowRestore className="mt-1" />
              <p>Stock in {stock}</p>
            </div>

            <div className="flex gap-1">
              <FiDollarSign className="mt-1" />
              <p>Price {sellPrice}</p>
            </div>
          </div>

          <AddToRent book={book}/>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
