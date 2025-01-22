import BookCard from "./BookCard";



const BookList = ({books}) => {

    console.log(books);
    
  return (
    <div className="w-full flex flex-wrap gap-5 py-4">
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