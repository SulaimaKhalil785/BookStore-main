import React from 'react'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from './BookCard';

const Store = () => {
  const {data: books = []} = useFetchAllBooksQuery();

  return (
    <div className='p-5 border flex-wrap flex gap-10 border-gray-300 rounded-lg h-max'>
        {
          books.length > 0 && books.map((book)=>{
            return <div className='w-[30%] h-max '><BookCard book={book}/> </div>
          })
        }
    </div>
  )
}

export default Store