import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPhoto } from './services/fetch-photos';

const SinglePhoto = () => {
    const [photo, setPhoto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchPhoto(id).then(photo => {
            setPhoto(photo)
        })
    }, [])


    if (!photo.urls) {
        return null;
    }


    return (<div>
        <img src={photo.urls.full} width="500px" />
    </div>);
}

export default SinglePhoto