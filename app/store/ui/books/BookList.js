import BookCard from "./BookCard";


const BookList = ({books}) => {

    console.log(books);
    
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
       {
        books.map((book, idx) =>{
            return(
                <BookCard book={book} key={idx}/>
            )
        })
       }
    </div>
  )
}

export default BookList