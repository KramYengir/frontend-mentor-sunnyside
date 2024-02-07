import "./Gallery.css";
import bottlesIMG from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import coneIMG from "../../assets/images/mobile/image-gallery-cone.jpg";
import orangeIMG from "../../assets/images/mobile/image-gallery-orange.jpg";
import sugarCubesIMG from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import bottlesDesktopIMG from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import coneDesktopIMG from "../../assets/images/desktop/image-gallery-cone.jpg";
import orangeDesktopIMG from "../../assets/images/desktop/image-gallery-orange.jpg";
import sugarCubesDesktopIMG from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <img src={bottlesIMG} alt="Image of milk bottles" />
      <img src={orangeIMG} alt="Image of sliced orange on a plate" />
      <img src={coneIMG} alt="Image of an empty ice-cream cone" />
      <img src={sugarCubesIMG} alt="Image of stacked sugar cubes" />
      <img
        className="desktop"
        src={bottlesDesktopIMG}
        alt="Image of milk bottles"
      />
      <img
        className="desktop"
        src={orangeDesktopIMG}
        alt="Image of sliced orange on a plate"
      />
      <img
        className="desktop"
        src={coneDesktopIMG}
        alt="Image of an empty ice-cream cone"
      />
      <img
        className="desktop"
        src={sugarCubesDesktopIMG}
        alt="Image of stacked sugar cubes"
      />
    </section>
  );
};

export default Gallery;
