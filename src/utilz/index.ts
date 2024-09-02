export const checkRoomAvailability = async (roomId: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_MAIN_API_URL}/room/${roomId}`
  );
  const data = await response.json();
  return data;
};

export type PrintNicePriceFormatProps = {
  currency?: 'CZK';
  price?: number;
};

export const printNicePriceFormat = ({
  price,
  currency = 'CZK',
}: PrintNicePriceFormatProps) => {
  if (price === undefined) {
    return null;
  }
  return Intl.NumberFormat('cs-CZ', { currency, style: 'currency' }).format(
    price
  );
};
