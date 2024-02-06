import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Gallery from "./components/Gallery/Gallery";
import Infographics from "./components/Infographics/Infographics";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Articles />
      <Infographics />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
