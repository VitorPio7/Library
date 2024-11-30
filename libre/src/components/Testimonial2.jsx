export default function Testimonial2({ type, title, img, info, name, adress }) {
  return (
    <div className={`testimonial2-${type}`}>
      <div className={`subTestimonial-${type}`}>
        <div className="head">
          <img src={img} alt="symbol" />
        </div>
        <p className={`mainInfo-${type}`}>{info}</p>
        <div className={`myInfo-${type}`}>
          <p className="name">{name}</p>
          <p>/</p>
          <p className="adress">{adress}</p>
        </div>
      </div>
    </div>
  );
}
