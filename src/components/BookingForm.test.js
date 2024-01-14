import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking page', () => {
  const availableTimes = () => ['17:00', '19:00', '22:00'];
  const today = new Date().toISOString().substr(0, 10);
  const getTimeSlots = () => ['17:00', '17:30'];
  const submitForm = jest.fn();

  test('correctly renders all field labels and inputs with default values', async () => {
    render(
      <BookingForm getTimeSlots={getTimeSlots} availableTimes={availableTimes()} submitForm={submitForm} />
    );

    const dateField = screen.getByLabelText(/Date/);
    expect(dateField).toBeInTheDocument();
    expect(dateField).toHaveAttribute('type', 'date');
    expect(dateField).toHaveAttribute('id', 'date');
    expect(dateField).toHaveValue(today);
    expect(dateField).toBeInTheDocument();

    const timeField = screen.getByLabelText(/Time/);
    expect(timeField).toBeInTheDocument();
    expect(timeField).toHaveAttribute('id', 'time');

    const timeOptions = {
      op1: screen.getByRole('option', { name: '17:00'}),
      op2: screen.getByRole('option', { name: '19:00'}),
      op3: screen.getByRole('option', { name: '22:00'}),
    };
    Object.keys(timeOptions).forEach((key) => {
      expect(timeOptions[key]).toBeInTheDocument();
      if(key === 'op1') {
        expect(timeOptions[key].selected).toBe(true)
      } else {
        expect(timeOptions[key].selected).toBe(false)
      }
    });

    const guestNumberField = screen.getByLabelText(/Number of guests/);
    expect(guestNumberField).toBeInTheDocument();
    expect(guestNumberField).toHaveAttribute('type', 'number');
    expect(guestNumberField).toHaveAttribute('id', 'guestNumber');
    expect(guestNumberField).toHaveValue(2);

    const occasionField = screen.getByLabelText(/Occasion/);
    expect(occasionField).toBeInTheDocument();
    expect(occasionField).toHaveAttribute('id', 'occasion');
    const occasionOptions = {
      op1: screen.getByRole('option', { name: 'No Occasion' }),
      op2: screen.getByRole('option', { name: 'Birthday' }),
      op3: screen.getByRole('option', { name: 'Anniversary' }),
    };
    Object.keys(occasionOptions).forEach((key) => {
      expect(occasionOptions[key]).toBeInTheDocument();
      if(key === 'op1') {
        expect(occasionOptions[key].selected).toBe(true)
      } else {
        expect(occasionOptions[key].selected).toBe(false)
      }
    });

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('form is submitted with the defaut values', async () => {
    render(
      <BookingForm getTimeSlots={getTimeSlots} availableTimes={availableTimes()} submitForm={submitForm} />
    );
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalledWith({ 
      date: today,
      time: '17:00',
      guestNumber: '2',
      occasion: '',
    });
  });

  test('submit button becomes disabled when guest number is removed', async () => {
    render(
      <BookingForm getTimeSlots={getTimeSlots} availableTimes={availableTimes()} submitForm={submitForm} />
    );

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    const guestNumberField = screen.getByLabelText(/Number of guests/);
    expect(guestNumberField).toBeInTheDocument();
    expect(guestNumberField).toHaveAttribute('type', 'number');
    expect(guestNumberField).toHaveAttribute('id', 'guestNumber');
    expect(guestNumberField).toHaveValue(2);

    fireEvent.change(guestNumberField, { target: { value: '' } });

    expect(guestNumberField).toHaveValue(null);
    expect(submitButton).toBeDisabled();
  });
});