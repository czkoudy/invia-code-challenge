import { useCallback, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ListRooms from './components/ListRooms';
import { AvailabilityMap } from './types';
import { checkRoomAvailability } from './utilz';

const App = () => {
  const [hotelRooms, setHotelRooms] = useState([]);
  const [availabilityMap, setAvailabilityMap] = useState<AvailabilityMap>({});

  useEffect(() => {
    const getHotelRooms = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_MAIN_API_URL}/rooms`
      );
      const data = await response.json();
      setHotelRooms(data);
    };

    getHotelRooms();

    return () => {
      setHotelRooms([]);
    };
  }, []);

  const handleCheckAvailability = useCallback(
    async (id: number) => {
      const result = await checkRoomAvailability(id);
      setAvailabilityMap((prev) => ({
        ...prev,
        [id]: result,
      }));
    },
    [setAvailabilityMap]
  );

  const handleCheckAllRoomsAvailability = () => {
    hotelRooms.forEach((room: { id: number }) => {
      handleCheckAvailability(room.id);
    });
  };

  return (
    <Container maxWidth="lg">
      <ListRooms
        rooms={hotelRooms}
        handleCheckAllRoomsAvailability={handleCheckAllRoomsAvailability}
        availabilityMap={availabilityMap}
        setAvailabilityMap={setAvailabilityMap}
        handleCheckAvailability={handleCheckAvailability}
      />
    </Container>
  );
};

export default App;
