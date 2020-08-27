import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap-icons';
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
            <p className="card-likes">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
             </svg>Likes:{likes}</p>
            <p className="card-tags">tags:{tags.slice(0, 3).map((tags) => tags.title).join(",")}</p>
            <p className="card-username">User:{user.username}</p>
            <p className="card-downloads">Downloads:{downloads}</p>
            <p className="card-location">Location:{location.country}</p>
        </div>
    </div>);
}

export default SinglePhoto