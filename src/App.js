import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchForm from './components/SearchForm';
import SearchResultCard from './components/SearchResultCard';
import fetchPhotos from './services/fetch-photos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const currentPage = 1;
  const onSubmitSeachFormCallback = event => {
    event.preventDefault();

    fetchPhotos(query, currentPage).then(
      photos => {
        setPhotos(photos);
      }
    );
  }
  const onInputChangeCallback = event => {
    setQuery(event.target.value)
  }

  return (
    <div className="App container">
      <SearchForm
        onSubmit={onSubmitSeachFormCallback}
        value={query}
        onChange={onInputChangeCallback}
      />

      <SearchResultCard {...photos[0]} />

      {/* Pagination */}
    </div>
  );
}

export default App;
