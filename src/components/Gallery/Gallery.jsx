import "./Gallery.css";
import bottlesIMG from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import coneIMG from "../../assets/images/mobile/image-gallery-cone.jpg";
import orangeIMG from "../../assets/images/mobile/image-gallery-orange.jpg";
import sugarCubesIMG from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <img src={bottlesIMG} alt="Image of milk bottles" />
      <img src={orangeIMG} alt="Image of sliced orange on a plate" />
      <img src={coneIMG} alt="Image of an empty ice-cream cone" />
      <img src={sugarCubesIMG} alt="Image of stacked sugar cubes" />
    </section>
  );
};

export default Gallery;
