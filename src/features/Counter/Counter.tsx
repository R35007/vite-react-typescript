// built-ins

// svgs

// Material ui components
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// styled components
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/configs/store';
import { decrement, getCount, increment } from './countSlice';

function Counter() {
  const count = useAppSelector(getCount);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="warning" onClick={() => dispatch(decrement(2))}>
          Decrement By 2
        </Button>
        <Button variant="contained" onClick={() => dispatch(increment(2))}>
          Increment By 2
        </Button>
      </Box>
      <Typography className="my-5">count is {count}</Typography>
    </Box>
  );
}

export default Counter;
