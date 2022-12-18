import Home from './index.page';
import { render, screen } from '@testing-library/react';

describe('my first test', () => {
  const subject = () => {
    return render(<Home />);
  };

  it('should say hello', () => {
    subject()
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
