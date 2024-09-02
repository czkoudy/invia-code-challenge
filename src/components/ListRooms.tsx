import { memo, useState } from 'react';
import HotelRoom from './HotelRoom/HotelRoom';
import Grid from '@mui/material/Grid2';
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material';
import { HotelRoomProps, ListRoomsProps } from '../types';
import Pagination from './Pagination/Pagination';
import LengthChangeMenu from './Pagination/LengthChangeMenu';
import { usePagination } from '../utilz/customHooks';

const ListRooms = ({
  rooms,
  handleCheckAllRoomsAvailability,
  availabilityMap,
  handleCheckAvailability,
}: ListRoomsProps) => {
  const [orderBy, setOrderBy] = useState('price');
  const [orderDirection, setOrderDirection] = useState('desc');
  const {
    currentPage,
    firstIndex,
    lastIndex,
    perPage,
    setPerPage,
    handlePrevPage,
    handleNextPage,
    setCurrentPage,
    totalPages,
  } = usePagination(rooms.length);
  const orderedRooms = rooms
    .sort((a, b) => {
      if (orderBy === 'price') {
        return orderDirection === 'asc'
          ? a.price.value - b.price.value
          : b.price.value - a.price.value;
      }

      if (orderBy === 'name') {
        return orderDirection === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      return 0;
    })
    .slice(firstIndex, lastIndex);

  const handleChangePerPage = (e: SelectChangeEvent) => {
    setPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <Typography variant="h6" sx={{ marginRight: '10px' }}>
          Sort By:
        </Typography>
        <Button
          onClick={() => setOrderBy('price')}
          disabled={orderBy === 'price'}
          variant="contained"
          size="small"
        >
          price
        </Button>
        |
        <Button
          onClick={() => setOrderBy('name')}
          disabled={orderBy === 'name'}
          variant="contained"
          size="small"
        >
          name
        </Button>
        <Typography variant="h6">Sort Direction:</Typography>
        <Button
          onClick={() => setOrderDirection('asc')}
          disabled={orderDirection === 'asc'}
          variant="contained"
          size="small"
        >
          asc
        </Button>
        |
        <Button
          onClick={() => setOrderDirection('desc')}
          disabled={orderDirection === 'desc'}
          variant="contained"
          size="small"
        >
          desc
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <Button
          onClick={handleCheckAllRoomsAvailability}
          variant="contained"
          size="medium"
        >
          Check all rooms availabilities
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <LengthChangeMenu
          perPage={perPage}
          handleOnChange={handleChangePerPage}
        />
      </Box>
      <Grid
        container
        sx={{ backgroundColor: 'whitesmoke', padding: '20px' }}
        justifyContent="center"
        columnSpacing={4}
        rowSpacing={4}
      >
        {orderedRooms.map((room: HotelRoomProps) => (
          <HotelRoom
            key={room.id}
            {...room}
            availability={availabilityMap}
            handleCheckAvailability={handleCheckAvailability}
          />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default memo(ListRooms);
