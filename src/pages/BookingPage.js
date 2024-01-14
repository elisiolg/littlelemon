import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReducerWithThunk } from '../state/useReducerWithThunk.js'
import { fetchAPI, submitAPI } from '../utils/mockedAPi'
import Hero from "../components/Hero.js";
import img from '../assets/images/reserved.png'
import MainLayout from '../layouts/Main.js'
import BookingForm from '../components/BookingForm.js'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'

function updateTimeSlots(date) {
    return async function fetchUserThunk(dispatch) {
        const slots = await fetchAPI(date);
        dispatch({ type: 'FETCH_SUCCESS', value: slots })
    }
}

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            state = action.value
            return state
        default:
            return state;
    }
};

const BookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [state, dispatch] = useReducerWithThunk(availableTimesReducer, null);

    function getTimeSlots(date) {
        dispatch(updateTimeSlots(date));
    }

    useEffect(() => {
        getTimeSlots(new Date().toISOString().substr(0, 10))
    }, []);

    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) {
            navigate('/booking-confirmed', { state: formData });
        }
    };

    return (

        <MainLayout location={location.pathname}>
            <Hero
                className="reservation"
                title="Reserve a Table"
                subtitle="We can't wait to serve you!"
                description={<BookingForm getTimeSlots={getTimeSlots} availableTimes={state} submitForm={submitForm} />}
            >
                <Hero.Action>
                </Hero.Action>
                <Hero.Image>
                    <img src={img} alt="booking" />
                </Hero.Image>
            </Hero>

        </MainLayout>
    )
};

export default BookingPage;
