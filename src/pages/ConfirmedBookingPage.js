

import { useNavigate, useLocation } from "react-router-dom";
import MainLayout from '../layouts/Main.js'
import Hero from "../components/Hero.js";
import img from '../assets/images/restaurant.jpg'

const NotFoundPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const date = location.state?.date
    const time = location.state?.time

    if (!date || !time) {
        return navigate('/booking');
    }

    const subtitle = `${new Date(date).toDateString()} - ${time}`;
    const description = `Hooray, your booking for ${location.state?.guestNumber} is confirmed!`;

    return (
        <MainLayout>
            <Hero
                className="booking-confirmation"
                title="Booking confirmed!"
                subtitle={subtitle}
                description={description}
            >
                <Hero.Action>
                </Hero.Action>
                <Hero.Image>
                    <img src={img} alt="booking confirmed" />
                </Hero.Image>
            </Hero>
        </MainLayout>
    )
};

export default NotFoundPage;
