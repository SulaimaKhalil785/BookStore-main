import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "./BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [searchedBooks,setSearchedBooks] = useState([])
  const { data: books = [] } = useFetchAllBooksQuery();
  
  const filterBooks = (books, searchString) => {
    const lowercasedSearch = searchString.toLowerCase();
  
    return books.filter(book =>
      book.title.toLowerCase().includes(lowercasedSearch) ||
      book.description.toLowerCase().includes(lowercasedSearch)
    );
  };

  useEffect(() => {
    // Extract the "query" parameter from the URL
    const queryParam = searchParams.get("query");
    setQuery(queryParam || "");
    setSearchedBooks(filterBooks(books, queryParam));
  }, [searchParams]);

  return (
    <>
      <div className="font-bold text-2xl ">
        <h1>Search Your Favorite Book Here!</h1>
      </div>
      <p>
        Search Results for: <span className="font-bold"> {query} </span>
      </p>
      <div className="flex h-max my-5">
        <div className="flex flex-col  gap-10">
          {searchedBooks.length > 0
            ? searchedBooks.map((book) => {
                return  <div className="w-max"><BookCard key={book._id} book={book} /> </div> 
              })
            : "No Books found matching this name!"}
          
        </div>
      </div>{" "}
    </>
  );
};

export default SearchPage;
