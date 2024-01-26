import "./Gallery.css";
import cherryImg from "../../assets/images/mobile/image-graphic-design.jpg";
import orangeImg from "../../assets/images/mobile/image-photography.jpg";

const Gallery = () => {
  return (
    <section>
      <h2 className="hidden-heading">Informative Gallery Section</h2>
      <div className="gallery-item">
        <img
          src={cherryImg}
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
      <div className="gallery-item">
        <img src={orangeImg} alt="Image of an orange with blue background" />
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

export default Gallery;
