import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPhoto } from './services/fetch-photos';

const SinglePhoto = () => {

    const [photo, setPhoto] = useState({});
    const { alt_description, likes, tags, user, downloads, location } = photo;
    const { id } = useParams();

     useEffect(() => {
     fetchPhoto(id).then(photo => {
      setPhoto(photo)
        })
    }, [])


    if (!photo.urls) {
        return null;
    }

    return (<div className="card">
        <div className="card-body">
            <h5 className="card-title">{alt_description}</h5>
            <img src={photo.urls.thumb} width="200px" />
            <p className="card-likes">Likes:{likes}</p>
            <p className="card-tags">tags:{tags.slice(0, 3).map((tags) => tags.title).join(",")}</p>
            <p className="card-username">User:{user.username}</p>
            <p className="card-downloads">Downloads:{downloads}</p>
            <p className="card-location">Location:{location.country}</p>
        </div>
    </div>);
}

export default SinglePhoto