// built-ins
import { Outlet, RootRoute } from '@tanstack/router';

// Layouts
import Navbar from '~layouts/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// Create a root route
export const rootRoute = new RootRoute({ component: App });

export default App;
