import './SearchBar.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { search } from '../../store/search.js';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  let history = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setErrors([]);

      return dispatch(search(searchTerm), setSearchTerm(''), history('/search'))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });

    }
    return setErrors(['Please enter a word to search']);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input
          className='form-field'
          id='search-bar'
          placeholder='Search for people to follow'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
    </>
  );
}

export default SearchBar;