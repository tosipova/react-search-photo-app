import React, { useState } from 'react';
import logo from './logo.svg';

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
    <div className="container">
      <SearchForm
        onSubmit={onSubmitSeachFormCallback}
        value={query}
        onChange={onInputChangeCallback}
      />

      {
        photos.map(photo => {
          return (
            <SearchResultCard
              alt_description={photo.alt_description}
              description={photo.description}
              urls={photo.urls}
            />
          )
        })
      }

      {/* Pagination */}
    </div>
  );
}

export default App;
