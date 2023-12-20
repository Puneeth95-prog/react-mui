import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import {  FavoriteBorder } from '@mui/icons-material';

function Posts() {
  return (
    <div>
        <Card sx={{ margin: 5 }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
            />
            <CardMedia
            component="img"
            height="15%"
            image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg"
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Posts
