import "./Infographics.css";
import cherryImg from "../../assets/images/mobile/image-graphic-design.jpg";
import cherryDesktopImg from "../../assets/images/desktop/image-graphic-design.jpg";
import orangeImg from "../../assets/images/mobile/image-photography.jpg";
import orangeDesktopImg from "../../assets/images/desktop/image-photography.jpg";

const Infographics = () => {
  return (
    <section className="infographics-section">
      <h2 className="hidden-heading">Informative Gallery Section</h2>
      <div className="infographic-item">
        <img
          src={cherryImg}
          alt="Image of pair of cherries with cyan background"
        />
        <img
          className="desktop"
          src={cherryDesktopImg}
          alt="Image of pair of cherries with cyan background"
        />
        <div className="info">
          <h3>Grapic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="infographic-item">
        <img src={orangeImg} alt="Image of an orange with blue background" />
        <img
          className="desktop"
          src={orangeDesktopImg}
          alt="Image of an orange with blue background"
        />
        <div className="info">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infographics;
