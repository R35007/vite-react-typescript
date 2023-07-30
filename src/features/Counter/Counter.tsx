// built-ins
import { useRef } from 'react';

// Material ui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// hooks
import { useAppDispatch, useAppSelector } from '~configs/store/hooks';

// redux
import { actions, selectors } from './redux';

function Counter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const count = useAppSelector(selectors.getCount);
  const isLoading = useAppSelector(selectors.getLoading);

  return (
    <Box className="Counter relative">
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
        <Button variant="contained" onClick={() => dispatch(actions.decrement())}>
          Decrement
        </Button>
        <Button variant="contained" onClick={() => dispatch(actions.increment())}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => dispatch(actions.incrementByAmount(parseInt(inputRef.current?.value || '0', 10)))}>
          Increment By Value
        </Button>
        <Button variant="contained" onClick={() => dispatch(actions.decrementAsync())}>
          Decrement Async
        </Button>
        <Button variant="contained" onClick={() => dispatch(actions.incrementAsync())}>
          Increment Async
        </Button>
        <Button variant="contained" onClick={() => dispatch(actions.incrementByAmountAsync(inputRef.current?.value))}>
          Increment Async By Value
        </Button>
      </Box>
      <Typography role="note" className="my-5 text-center">
        count is {count}
      </Typography>
    </Box>
  );
}

export default Counter;
