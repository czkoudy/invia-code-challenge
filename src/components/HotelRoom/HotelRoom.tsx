import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import AvailabilityBanner from './AvailabilityBanner';
import RoomPrice from './RoomPrice';
import { HotelRoomProps } from '../../types';
import Grid from '@mui/material/Grid2';

const HotelRoom = ({
  id,
  name,
  price,
  availability,
  handleCheckAvailability,
}: HotelRoomProps) => {
  const handleOnClickBookButton = () => {
    console.log({ availability, id, name, price });
  };

  const roomAvailability = availability[id];

  return (
    <Grid size={3}>
      <Card raised>
        <AvailabilityBanner availability={roomAvailability} />
        <CardMedia
          sx={{ height: 140 }}
          image="/src/assets/hotel_room.png"
          title="green iguana"
        />
        <CardContent sx={{ minHeight: '180px' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontSize={16}
            fontWeight={600}
          >
            {name}
          </Typography>
          <RoomPrice price={price} availability={roomAvailability} />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={() => handleCheckAvailability(id)}
          >
            Check Availability
          </Button>
          <Button
            size="small"
            variant="contained"
            color="success"
            disabled={roomAvailability?.availabilityStatus !== 'available'}
            onClick={handleOnClickBookButton}
          >
            Book
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default memo(HotelRoom);
