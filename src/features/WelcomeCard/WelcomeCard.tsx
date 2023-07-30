// Material ui components
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// svgs
import reactLogo from '~assets/react.svg';
import viteLogo from '~assets/vite.svg';

// features
import Counter from '~features/Counter';

// styled components
import Logo from './Logo.style';

function WelcomeCard({ title = 'Welcome' }: { title: string }) {
  return (
    <Card sx={{ background: 'palette.background.paper', margin: 'auto', textAlign: 'center' }} className=" WelcomeCard p-8">
      <Typography component="h1" sx={{ fontSize: '2.5rem' }}>
        Vite React Typescript Template
      </Typography>
      <CardContent sx={{ padding: '0' }}>
        <Logo className="inline-block" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Logo>
        <Logo className="inline-block" href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Logo>
      </CardContent>
      <Typography variant="h5">{title}</Typography>
      <CardContent className="p-0">
        <Counter />
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
