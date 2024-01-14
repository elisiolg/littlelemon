

import { useNavigate } from "react-router-dom";
import MainLayout from '../layouts/Main.js'
import Hero from "../components/Hero.js";
import not_found_img from '../assets/images/404.png'

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <MainLayout>
          <Hero
            className="not-found"
            title="Page not found"
            subtitle="404"
            description="Sorry, we can't seem to find this page!"
          >
            <Hero.Action>
              <button className="button" onClick={() => navigate(-1)} aria-disabled="false">
                Go back
              </button>
            </Hero.Action>
            <Hero.Image>
              <img src={not_found_img} alt="page not found"/>
            </Hero.Image>
          </Hero>
        </MainLayout>
    )
  };

export default NotFoundPage;
