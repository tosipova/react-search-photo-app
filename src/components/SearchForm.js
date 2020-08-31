import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function SearchForm(props) {
    return (
        <form
            onSubmit={props.onSubmit}
        >

            <TextField variant="outlined"
                value={props.query}
                onChange={props.onChange}
                size="small"
            />
            <Button variant="contained" color="primary" type="submit">
              Search photo
            </Button>
        </form>
    )
}

export default SearchForm;