const TestimonalCard = ({ avatar, name, description, role }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt="Small image of client" />
      <p className="client-description">{description}</p>
      <div className="client__details">
        <p className="client-name">{name}</p>
        <p className="client-role">{role}</p>
      </div>
    </div>
  );
};

export default TestimonalCard;
