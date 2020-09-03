import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

function SimpleBreadcrumbs(props) {
    const { description } = props

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
                Home
            </Link>
            {description && <Typography color="textPrimary">{description}</Typography>}
        </Breadcrumbs>
    );

}
export default SimpleBreadcrumbs;