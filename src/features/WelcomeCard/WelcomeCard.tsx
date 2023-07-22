// built-ins

// svgs
import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';

// Material ui components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

// styled components
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/configs/store';
import Logo from './Logo.style';
import { decrement, getCount, increment } from './countSlice';

function WelcomeCard({ title = 'Welcome' }: { title: string }) {
  const count = useAppSelector(getCount);
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ background: 'palette.background.paper', margin: 'auto', maxWidth: '45rem', textAlign: 'center' }} className="p-8">
      <CardHeader title={title} />
      <CardContent sx={{ padding: '0' }}>
        <Logo className="inline-block" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Logo>
        <Logo className="inline-block" href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Logo>
      </CardContent>
      <Typography variant="h3">Vite + React</Typography>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="warning" onClick={() => dispatch(decrement(2))}>
            Decrement By 2
          </Button>
          <Button variant="contained" onClick={() => dispatch(increment(2))}>
            Increment By 2
          </Button>
        </Box>
        <Typography className="my-5">count is {count}</Typography>
        <Typography className="my-5">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </CardContent>
      <CardActionArea>
        <Typography color="GrayText">Click on the Vite and React logos to learn more</Typography>
      </CardActionArea>
    </Card>
  );
}

export default WelcomeCard;
