import { ImQuotesLeft } from "react-icons/im";
export default function Testimonial({ text1, name, local, img, type }) {
  let decision = type === "vertical" ? "30px" : "0px";

  return (
    <div className={`container-${type}`}>
      <img src={img} alt="person-image" className={`personImage-${type}`} />

      <div className={`text-${type}`}>
        <div className={`icon-${type}`}>
          <ImQuotesLeft
            style={{
              marginTop: decision,
              marginBottom: decision,
              width: "50",
              height: "50",
              color: "#FFFFFF",
              opacity: "25%",
            }}
          />
        </div>
        <p className={`mainText-${type}`}>{text1}</p>
        <p className={`name-${type}`}>{name}</p>
        <p className={`local-${type}`}>{local}</p>
      </div>
    </div>
  );
}
