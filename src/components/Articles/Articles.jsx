import "./Articles.css";
import eggImg from "../../assets/images/mobile/image-transform.jpg";
import windeGlassImg from "../../assets/images/mobile/image-stand-out.jpg";

const Articles = () => {
  return (
    <section>
      <h2 className="hidden-heading">Information Articles Section</h2>
      <article>
        <img
          src={eggImg}
          alt="Stylish image of an egg with yellow background"
        />
        <div className="article-info">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" className="yellow">
            Learn more
          </a>
        </div>
      </article>
      <article>
        <img src={windeGlassImg} alt="Pink tinted image of a wine glass" />
        <div className="article-info">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#" className="pink">
            Learn more
          </a>
        </div>
      </article>
    </section>
  );
};

export default Articles;
