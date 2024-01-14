import MainLayout from '../layouts/Main.js'
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.js";
import Highlights from "../components/Highlights.js";
import Testimonials from "../components/Testimonials.js";
import About from "../components/About.js";
import hero_image from "../assets/images/restaurantfood.jpg";

const HomePage = () => {
  const desc = 'The family owned Little Lemon restaurant prides itself in offering delicious traditional Mediterranean recipes served with a modern twist. Located in the heart of Chicago.'
  const navigate = useNavigate();
  const goToBooking = () => navigate('/booking');

  return (
    <MainLayout>
      <main className="App-Main">
        <Hero
          className="cta"
          title="Little Lemon"
          subtitle="Chicago"
          description={desc}
        >
          <Hero.Action>
            <button className="button" onClick={goToBooking}>
              Reserve a table
            </button>
          </Hero.Action>
          <Hero.Image>
            <img src={hero_image} alt="restaurant"/>
          </Hero.Image>
        </Hero>

        <Highlights />
        <Testimonials />
        <About />
      </main>
    </MainLayout>
  )
};

export default HomePage;
