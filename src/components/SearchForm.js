import React from 'react';

function SearchForm(props) {
    return (
        <form
            onSubmit={props.onSubmit}
            className="form form-inline"
        >
            <input
                className="form-control mb-2 mr-sm-2"
                type="text"
                value={props.query}
                onChange={props.onChange}
            />
            <button className="btn btn-primary mb-2 mr-sm-2"> Search photo </button>
        </form>
    )
}

export default SearchForm;