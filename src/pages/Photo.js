
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import BreadCrumbs from '../components/BreadCrumbs';
import SinglePhoto from '../components/SinglePhoto';
import { useParams } from 'react-router-dom';
import { fetchPhoto } from '../services/fetch-photos';



function Photo() {
   
    const [photo, setPhoto] = useState({});
    const { alt_description, likes, tags, user, downloads, location } = photo;
    const { id } = useParams();

    useEffect(() => {
     fetchPhoto(id).then(photo => {
      setPhoto(photo)
        })
    }, [])
    


    return (
        <Container maxWidth="sm">
            <BreadCrumbs description={photo.description} />
            <SinglePhoto photo={photo} />
        </Container>
    )
}
export default Photo
