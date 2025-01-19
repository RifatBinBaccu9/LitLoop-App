import Image from 'next/image';
import React from 'react'

const BookCard = ({book}) => {
    console.log(book);
    
  return (
    <div>
           <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">{book.title}</h3>
        </div>
        <div className="mb-2 h-13">
          <Image 
            className="mr-2 rounded-md"
            src={book.cover} 
            alt={book.title} 
            width={150} 
            height={100} 
            style={{height: '200px', width: 'auto'}}
            priority={true} />
        </div>
        </div>
    </div>
  )
}

export default BookCard