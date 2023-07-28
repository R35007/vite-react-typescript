// built-ins
import { Route } from '@tanstack/router';

// material ui components
import Container from '@mui/material/Container';

// enums
import Routes from '~constants/routes.enum';

// features
import WelcomeCard from '~features/WelcomeCard';

// routes
import { rootRoute } from 'src/App';

function Home() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <WelcomeCard title="Home Page" />
    </Container>
  );
}

// Index route
export const homeRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.HOME });

// Not Found route
export const notFoundRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.NOT_FOUND });

export default Home;
