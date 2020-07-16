import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {

  const {books} =useContext( BookContext )
  return ( 
    <nav>
      <h1>Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </nav>
   );
}
 
export default NavBar;