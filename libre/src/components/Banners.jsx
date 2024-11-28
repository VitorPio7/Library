import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";

export default function Banners({ type, title, text }) {
  function myTipe(value) {
    if (value === "sucess") {
      return <AiFillCheckCircle style={{ color: "#34D399", width: "20px" }} />;
    } else if (value === "warning") {
      return <AiFillWarning style={{ color: "#FBBF24", width: "20px" }} />;
    }
  }
  return (
    <div className={`banner ${type}`}>
      {myTipe(type)}
      <div className="content">
        <p className={`${type}MainText`}>{title}</p>
        <p className={` ${type}SecondText`}>{text}</p>
      </div>
    </div>
  );
}
