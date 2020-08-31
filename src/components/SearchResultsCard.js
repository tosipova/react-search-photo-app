import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';



function SearchResultsCard(props) {
    const { alt_description, description, urls = {}, id, }
        = props;

    if (!urls.thumb) {
        return null;
    }

    return (

        <Card >
            <CardActionArea>
                <a href={`/photos/${id}`}>
                    <CardMedia
                        src={urls.thumb}
                        title=""
                        component="img"
                    />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {alt_description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>



        </Card>
    )
}

export default SearchResultsCard;