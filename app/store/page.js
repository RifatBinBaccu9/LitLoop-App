import { getAllBooks } from "../lib/fack-data"
import BookList from "../ui/books/BookList";



const home = () => {
  const books=getAllBooks();
  console.log(books);
  
  return (
    <div>
     <BookList books={books}/>
    </div>
  )
}

export default home