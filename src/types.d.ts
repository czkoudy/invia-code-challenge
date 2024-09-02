export type HotelRoomPrice = {
  currencyCode: string;
  value: number;
};

export type HotelRoomProps = {
  availability: AvailabilityMap;
  handleCheckAvailability: (id: number) => void;
  id: number;
  name: string;
  price: HotelRoomPrice;
};

export type HotelRoomAvailabilityStatus =
  | 'available'
  | 'soldOut'
  | 'error'
  | 'onRequest'
  | null;

export type HotelRoomAvailability = {
  availabilityStatus: HotelRoomAvailabilityStatus;
  price: HotelRoomPrice;
} | null;

export type ListRoomsProps = {
  availabilityMap: AvailabilityMap;
  handleCheckAllRoomsAvailability: VoidFunction;
  handleCheckAvailability: (id: number) => void;
  rooms: HotelRoomProps[];
  setAvailabilityMap: (availabilityMap: AvailabilityMap) => void;
};

export type AvailabilityMap = Record<number, HotelRoomAvailability | null>;

export type RoomPriceProps = {
  availability: { price: HotelRoomPrice } | null;
  price: HotelRoomPrice;
};

// Pagination Types

export type PaginationProps = {
  currentPage: number;
  handleNextPage: VoidFunction;
  handlePrevPage: VoidFunction;
  totalPages: number;
};

export type LengthChangeMenuProps = {
  handleOnChange: (e: SelectChangeEvent) => void;
  perPage: string;
};
