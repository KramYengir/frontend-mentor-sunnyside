import "./Testimonials.css";
import { Data } from "./TestimonialData";
import TestimonialCard from "./TestimonalCard";

const Testimonials = () => {
  return (
    <section className="testimonials-section container">
      <h2>Client testimonials</h2>
      <div className="testimonials">
        {Data.map((client) => (
          <TestimonialCard
            key={client.id}
            avatar={client.avatar}
            description={client.description}
            name={client.name}
            role={client.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
