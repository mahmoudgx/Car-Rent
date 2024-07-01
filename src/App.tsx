import Banner from "./components/Banner";
import CarBrands from "./components/CarBrands";
import Cars from "./components/Cars";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Rent from "./components/Rent";
import Services from "./components/Services";
import Works from "./components/Works";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Rent />
      <CarBrands />
      <Cars />
      <Works />
      <Services />
      <Customers />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
