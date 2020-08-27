import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import MyContext from './Context';
import { fetchPhoto } from './services/fetch-photos';


const SinglePhoto = () => {

    const [photo, setPhoto] = useState({});
    const { alt_description, likes, tags, user, downloads, location } = photo;
    const { id } = useParams();
    const { photos } = React.useContext(MyContext);

    useEffect(() => {
        const photo = photos.find(p => {
            return p.id === id;
        })

        if (photo) {
            setPhoto(photo)
        } else {
            fetchPhoto(id).then(photoFromServer => {
                setPhoto(photoFromServer)
            })
        }
    }, [])


    if (!photo.urls) {
        return null;
    }

    return (<div className="card">
        <div className="card-body">
            <h5 className="card-title">{alt_description}</h5>
            <img src={photo.urls.thumb} width="200px" />
            <p className="card-likes">Likes:{likes}</p>
            <p className="card-tags">tags:{tags.slice(0, 3).map(tag => tag.title).join(",")}</p>
        </div>
    </div>);
}

export default SinglePhoto