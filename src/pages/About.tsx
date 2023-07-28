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

function About() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <WelcomeCard title="About Page" />
    </Container>
  );
}

// About route
export const aboutRoute = new Route({ component: About, getParentRoute: () => rootRoute, path: Routes.ABOUT });

export default About;
