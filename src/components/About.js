
import Hero from "./Hero.js";
import chef_image from "../assets/images/Mario_and_Adrian.jpg";

const About = () => {
    const desc = 'The family owned Little Lemon restaurant prides itself in offering delicious traditional Mediterranean recipes served with a modern twist. Located in the heart of Chicago.'

      return (
        <section id="about">
            <Hero
              className="about dark"
              title="Little Lemon"
              subtitle="Chicago"
              description={desc}
            >
              <Hero.Action>
              </Hero.Action>
              <Hero.Image>
                <img src={chef_image} alt="about us"/>
              </Hero.Image>
            </Hero>
          </section>
      )
    };
  export default About;
