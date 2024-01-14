import Navigation from './Navigation.js';
import logo from '../assets/images/logo-footer.png';

const addressItems = [
    {
        label: "20 W DIVISION ST CHICAGO",
      },
      {
        label: "IL 60610-2294 USA",
      },
      {
        label: "Get Directions",
        url: "https://maps.app.goo.gl/j62Mh5ZtGT6sN7bZ6",
      },
      {
        label: "Phone: 312-688-4603",
      },
      {
        label: "Email: info@littlelemon.com",
      },
  ];


const socialMediaItems = [
  {
      label: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/",
    },
];

function createLinks(items) {
  return items.map((element, index) => {
    return (
        element.url ?
        <a href={`${element.url}`} key={index} target="_blank" rel="noreferrer">
          {element.label}
        </a>
        : <span key={index}>{element.label}</span>
    )
  });
}

const Footer = () => {
    return (
        <footer className="App-Footer">
            <div className="logo-img">
              <img src={logo} aria-label="logo" className="logo" alt="logo" />
            </div>
            <div className="menu-links main">
              <Navigation rawOutput="1" />
            </div>
            <div className="menu-links contact">
              {createLinks(addressItems)}
              </div>
            <div className="menu-links social">
              {createLinks(socialMediaItems)}
            </div>
        </footer>
    )
  };

export default Footer;