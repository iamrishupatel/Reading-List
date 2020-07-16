import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitEventHandler = e => {
    e.preventDefault()
    // addBook(title,author)
    dispatch({type:'ADD_BOOK', book : {
      title, author
    }});

    setTitle('')
    setAuthor('')
    
  }

  return ( 
    <form onSubmit={submitEventHandler}>
      <input type="text" placeholder="Book Title" value={title}
      onChange={(e)=> setTitle(e.target.value)} required/>

      <input type="text" placeholder="Book Author" value={author}
      onChange={(e)=> setAuthor(e.target.value)} required/>

      <input type="submit" value="Add"/>
    </form>
   );
}
 
export default BookForm;
