import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LengthChangeMenuProps } from '../../types';

const LengthChangeMenu = ({
  perPage,
  handleOnChange,
}: LengthChangeMenuProps) => {
  return (
    <div>
      <FormControl sx={{ width: '200px' }}>
        <InputLabel id="demo-simple-select-label">Results per page</InputLabel>
        <Select
          value={perPage}
          label="Results per page"
          onChange={handleOnChange}
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LengthChangeMenu;
