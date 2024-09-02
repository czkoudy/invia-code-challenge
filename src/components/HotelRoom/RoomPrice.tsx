import { Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { RoomPriceProps } from '../../types';
import { printNicePriceFormat } from '../../utilz';

const RoomPrice = ({ price, availability }: RoomPriceProps) => {
  if (availability?.price?.value) {
    const priceDifference = availability.price.value - price.value;

    return (
      <div>
        <Typography
          sx={{
            textDecoration: priceDifference !== 0 ? 'line-through' : 'none',
          }}
        >
          {printNicePriceFormat({ price: price.value })}
        </Typography>
        {priceDifference !== 0 && (
          <>
            <Typography
              color={
                availability.price.value > price.value ? 'error' : 'success'
              }
            >
              {printNicePriceFormat({ price: availability.price.value })}
            </Typography>
            <Typography
              color={
                availability.price.value > price.value ? 'error' : 'success'
              }
              fontSize={12}
            >
              Price went {priceDifference > 0 ? 'UP' : 'DOWN'}{' '}
              {priceDifference > 0 ? (
                <ArrowDropUpIcon sx={{ color: 'red' }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: 'green' }} />
              )}
              by {printNicePriceFormat({ price: Math.abs(priceDifference) })}
            </Typography>
          </>
        )}

        {priceDifference === 0 && (
          <Typography
            color={availability.price.value > price.value ? 'error' : 'success'}
          >
            No change in price
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div>
      <Typography>{printNicePriceFormat({ price: price.value })}</Typography>
    </div>
  );
};

export default RoomPrice;
