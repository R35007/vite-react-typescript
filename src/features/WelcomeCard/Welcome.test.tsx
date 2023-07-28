import render, { describe, expect, it, screen } from '~libs/vitest';

// components
import WelcomeCard from '~features/WelcomeCard';

// helpers

describe('Welcome Card Feature Test Suite', () => {
  it('should render welcome card with title', async () => {
    const title = 'WelcomeCard';

    await render(<WelcomeCard title={title} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });

  it('should render Counter component', async () => {
    const { container } = await render(<WelcomeCard title="WelcomeCard" />);

    expect(container.querySelector('.Counter')).toBeInTheDocument();
  });
});
