import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import SearchForm from './components/SearchForm';
import SearchResultCard from './components/SearchResultCard';
import fetchPhotos from './services/fetch-photos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('dog');
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState();

  const onSubmitSeachFormCallback = event => {
    event.preventDefault();

    fetchPhotos(query).then(
      ({ photos, totalPages }) => {
        setPhotos(photos);
        setTotalPages(totalPages)
        setCurrentPage(1)
      }
    );
  }
  const onInputChangeCallback = event => {
    setQuery(event.target.value)
  }
  const onPageChangeCallback = (page = {}) => {
    const { selected } = page;

    console.log(page);


    if (selected) {
      setCurrentPage(selected + 1);

      fetchPhotos(query, currentPage).then(
        ({ photos }) => {
          setPhotos(photos);
        }
      );
    }
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
              key={photo.alt_description}
            />
          )
        })
      }

      {/* 
      
      + Choose a page
        + Choose an exactly numeric page
        + Choose previous or next page

      - Set a page button to active state
      - Add styles
      
      */}

      {totalPages &&
        <>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            onPageChange={onPageChangeCallback}
            forcePage={currentPage - 1}
            activeClassName="active"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-link"
            nextClassName="page-link"
            previousLabel="<<"
            nextLabel=">>"
            breakClassName="d-none"
          />
          <div>Total Pages:{totalPages}</div>
        </>
        }
     </div>
  );
}

export default App;
