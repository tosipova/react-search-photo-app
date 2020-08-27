import React from 'react';
import { Link } from 'react-router-dom';

function SearchResultsCard(props) {
    const { alt_description, description, urls = {}, id, }
        = props;

    if (!urls.thumb) {
        return null;
    }


    return (
        <div className="card">
            <Link to={`/photos/${id}`}>
                <img src={urls.thumb} className="card-img-top" alt="..." />
            </Link>

            < div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">{alt_description}</p>
               
                {/* <p className="card-likes">Likes:{likes}</p>
                <p className="card-tag">Tag:{tags.map((tag) => tag.title).join(",")}</p>
                <p className="card-username">User:{user.username}</p> */}

            </div>
        </div>
    )
}

export default SearchResultsCard;