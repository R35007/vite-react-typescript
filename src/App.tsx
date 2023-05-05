// built-ins
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

// svgs
import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';

// Material ui components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const logoSpin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const Logo = styled.a`
  &:nth-of-type(2) {
    animation: ${logoSpin} infinite 20s linear;
  }

  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.react {
      &:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <Card sx={{ background: 'palette.background.paper', margin: 'auto', maxWidth: '45rem', textAlign: 'center' }} className="p-8">
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
          <Button variant="contained" onClick={() => setCount((previousCount) => previousCount + 1)}>
            count is {count}
          </Button>
          <Typography className="my-5">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
        </CardContent>
        <CardActionArea>
          <Typography color="GrayText">Click on the Vite and React logos to learn more</Typography>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default App;
