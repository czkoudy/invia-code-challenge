import { Alert, Box } from '@mui/material';
import { HotelRoomAvailability } from '../../types';

const AvailabilityBanner = ({
  availability,
}: {
  availability: HotelRoomAvailability;
}) => {
  if (availability?.availabilityStatus === 'available') {
    return <Alert>Room is Available</Alert>;
  }

  if (availability?.availabilityStatus === 'soldOut') {
    return <Alert severity="warning">Room is Sold Out</Alert>;
  }

  if (availability?.availabilityStatus === 'error') {
    return <Alert severity="error">Error Fetching Availability</Alert>;
  }

  if (availability?.availabilityStatus === 'onRequest') {
    return <Alert severity="info">Room is On Request</Alert>;
  }

  return <Box sx={{ height: '48px' }}>&nbsp;</Box>;
};

export default AvailabilityBanner;
