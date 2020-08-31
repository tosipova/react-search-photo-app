import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



function SimpleBreadcrumbs(props) {
    const { description } = props
    function handleClick() { }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            {description && <Typography color="textPrimary">{description}</Typography>}
        </Breadcrumbs>
    );

}
export default SimpleBreadcrumbs;