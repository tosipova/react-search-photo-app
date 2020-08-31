import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import SearchForm from '../components/SearchForm';
import SearchResultsCard from '../components/SearchResultsCard';
import fetchPhotos from '../services/fetch-photos';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export function BasicPagination() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Pagination count={10} />
//       <Pagination count={10} color="primary" />
//       <Pagination count={10} color="secondary" />
//       <Pagination count={10} disabled />
//     </div>
//   );
// }

function Home() {
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

    function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }


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

      {/* 
      
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
    </Container>
  );
}

export default Home;
