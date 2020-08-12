import React from 'react';

function SearchResultsCard(props) {
    const { alt_description, description, urls = {} }
        = props;
    
    if (!urls.thumb) {
        return null;
    }

    return (
        <div className="card">
            <img src={urls.thumb} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">{alt_description}</p>

            </div>
        </div>
    )
}

export default SearchResultsCard;