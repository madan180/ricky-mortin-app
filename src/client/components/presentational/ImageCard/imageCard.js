import React from 'react';
import ImageCardWrapper from './imageCard.style';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getformattedDate } from '../../../../utils';

const ImageCard = ({ data }) => {
  return (
    <ImageCardWrapper item xs={12} lg={4}>
      <CardMedia image={data.image} title={data.name} className="card-image" />
      <CardContent className="name-id-container">
          <Typography className="name-id-subcontainer" variant="body2" color="textSecondary" component="p">
            <span className="name-title">{data.name}</span>
            <span className="created-at">{`id: ${
              data.id
            } - created: ${getformattedDate(data.created)}`}</span>
          </Typography>
      </CardContent>
      <CardContent className="aditional-detail-container">
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="image-text-status">STATUS</span>
          <span className="image-text-label">{data.status}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="image-text-status">SPECIES</span>
          <span className="image-text-label">{data.species}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="image-text-status">ORIGIN</span>
          <span className="image-text-label">{data?.origin?.name}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="image-text-status">LAST LOCATION</span>
          <span className="image-text-label">{data?.location?.name}</span>
        </Typography>
      </CardContent>
    </ImageCardWrapper>
  );
};

export default ImageCard;
