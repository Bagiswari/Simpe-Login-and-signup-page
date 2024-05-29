// App.test.js
// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Welcome to our first Web Development project!/i);
  expect(welcomeText).toBeInTheDocument();
});


