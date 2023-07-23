// built-ins
import { useRef } from 'react';

// Material ui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// hooks
import { useDispatch, useSelector } from 'src/configs/store';

// actions
import { counterActions } from './reducer/slice';

// selectors
import { getCount, getLoading } from './reducer/selectors';

function Counter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const count = useSelector(getCount);
  const isLoading = useSelector(getLoading);

  return (
    <Box className="relative">
      {isLoading && (
        <Box className="absolute inset-0 z-10 grid w-full place-items-center bg-black opacity-70" sx={{ padding: '1rem' }}>
          <CircularProgress />
        </Box>
      )}
      <Box sx={{ padding: '1rem' }}>
        <TextField
          fullWidth
          inputRef={inputRef}
          label="Count Increment Value"
          variant="standard"
          inputProps={{ style: { boxShadow: 'none' } }}
        />
      </Box>
      <Box sx={{ boxShadow: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <Button variant="contained" onClick={() => dispatch(counterActions.decrement())}>
          Decrement By 1
        </Button>
        <Button variant="contained" onClick={() => dispatch(counterActions.increment())}>
          Increment By 1
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(counterActions.incrementByAmount(parseInt(inputRef.current?.value || '0', 10)))}
        >
          Increment By Value
        </Button>
        <Button variant="contained" onClick={() => dispatch(counterActions.decrementAsync())}>
          Decrement Async By 1
        </Button>
        <Button variant="contained" onClick={() => dispatch(counterActions.incrementAsync())}>
          Increment Async By 1
        </Button>
        <Button variant="contained" onClick={() => dispatch(counterActions.incrementByAmountAsync(inputRef.current?.value))}>
          Increment Async By Value
        </Button>
      </Box>
      <Typography className="my-5">count is {count}</Typography>
    </Box>
  );
}

export default Counter;
