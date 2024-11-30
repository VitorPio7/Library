export default function Testimonial2({ title, img, info }) {
  return (
    <div className="testimoal2">
      <div className="head">
        <img src={img} alt="symbol" />
        <p className="title">{title}</p>
      </div>
      <p className="mainInfo">{info}</p>
      <div className=""></div>
    </div>
  );
}
