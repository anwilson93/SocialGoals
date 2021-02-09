import './SearchBar.css';
import { useState } from "react";
import {useDispatch} from 'react-redux';
// import {search} from '../../store/search.js';
import {Redirect} from 'react-router-dom';

function SearchBar (){
  const dispatch = useDispatch();

   const [searchTerm, setSearchTerm] = useState('');
   const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (searchTerm) {
    //   setErrors([]);

    //   return dispatch(search({searchTerm}), setSearchTerm(''), <Redirect to='/'></Redirect> )
    //     .catch(res => {
    //       if (res.data && res.data.errors) setErrors(res.data.errors);
    //     });

    // }
    // return setErrors(['Please enter a word to search']);
  };
  return (
        <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input 
          id='search-bar'
          placeholder='Search for people or goals to follow'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
      </form>
    </>
  );
}

export default SearchBar