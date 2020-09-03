import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import SearchForm from '../components/SearchForm';
import SearchResultsCard from '../components/SearchResultsCard';
import fetchPhotos from '../services/fetch-photos';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
  const onPageChangeCallback = (_, page) => {

    if (page !== currentPage) {
      setCurrentPage(page);

      fetchPhotos(query, currentPage).then(
        ({ photos }) => {
          setPhotos(photos);
        }
      );
    }
  }

  return (

    <Container maxWidth="sm">

      <SearchForm
        onSubmit={onSubmitSeachFormCallback}
        value={query}
        onChange={onInputChangeCallback}
      />

      {
        photos.map(photo => {
          return (
            <SearchResultsCard
              alt_description={photo.alt_description}
              description={photo.description}
              urls={photo.urls}
              key={photo.alt_description}
              id={photo.id}
              likes={photo.likes}
              tags={photo.tags}
              user={photo.user}
            />
          )
        })
      }

      {
        Boolean(totalPages) && <Pagination count={totalPages} onChange={onPageChangeCallback} page={currentPage} />
      }
    </Container>
  );
}

export default Home;
