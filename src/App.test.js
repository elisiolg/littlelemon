import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('the menu items all render', () => {
  render(<App />);
  const homeEl = screen.getAllByText('Home');
  expect((homeEl).length).toEqual(3);

  const aboutEl = screen.getAllByText('About');
  expect((aboutEl).length).toEqual(3);

  const menuEl = screen.getAllByText('Menu');
  expect((menuEl).length).toEqual(3);

  const reservationEl = screen.getAllByText('Reservations');
  expect((reservationEl).length).toEqual(3);

  const orderEl = screen.getAllByText('Order Online');
  expect((orderEl).length).toEqual(3);

  const loginEl = screen.getAllByText('Login');
  expect((loginEl).length).toEqual(3);
});


test('the special dish items all render', () => {
  render(<App />);
  const salad = screen.getByText('Greek Salad');
  expect(salad).toBeInTheDocument();

  const bruchetta = screen.getByText('Bruchetta');
  expect(bruchetta).toBeInTheDocument();

  const dessert = screen.getByText('Lemon Dessert');
  expect(dessert).toBeInTheDocument();
});

test('the testimonial items all render', () => {
  render(<App />);
  const mary = screen.getByText('Mary Jane');
  expect(mary).toBeInTheDocument();

  const sean = screen.getByText('Sean');
  expect(sean).toBeInTheDocument();

  const jonathan = screen.getByText('Jonathan');
  expect(jonathan).toBeInTheDocument();

  const ken = screen.getByText('Ken');
  expect(ken).toBeInTheDocument();
});

test('the reserve button renders', async () => {
  render(<App />);
  const reserve = screen.getByText('Reserve a table');
  expect(reserve).toBeInTheDocument();
});

test('the menu button renders and navigates to correct page', async () => {
  render(<App />);
  const menu = screen.getByText('Online Menu');
  expect(menu).toBeInTheDocument();

  fireEvent.click(menu);
  expect(screen.getByText('Page not found')).toBeTruthy();

  const goBackButton = screen.getByText('Go back');
  expect(goBackButton).toBeInTheDocument();
});
