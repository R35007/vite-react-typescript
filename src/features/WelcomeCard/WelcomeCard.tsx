// built-ins

// svgs
import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';

// Material ui components
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

// styled components
import Counter from '@features/Counter';
import Logo from './Logo.style';

function WelcomeCard({ title = 'Welcome' }: { title: string }) {
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
