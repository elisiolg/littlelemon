import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const MainLayout = (props) => {
  return (
    <>
      <Header location={props.location}/>
        { props.children }
      <Footer location={props.location}/>
    </>  );
}

export default MainLayout;
