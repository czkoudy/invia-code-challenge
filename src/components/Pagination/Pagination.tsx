import { Box, Button, Typography } from '@mui/material';
import { PaginationProps } from '../../types';

const Pagination = ({
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        size="small"
        variant="contained"
      >
        Prev
      </Button>
      <Typography variant="h6" sx={{ margin: '0 10px' }}>
        {currentPage} of {totalPages}
      </Typography>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        size="small"
        variant="contained"
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
