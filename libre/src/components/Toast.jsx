import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Toast({ type, title, text }) {
  function myTipe(value) {
    if (value === "success") {
      return (
        <FaRegCheckCircle
          style={{
            color: "#34D399",
            width: "20px",
            height: "18px",
            marginLeft: "16px",
            marginBottom: "16px",
          }}
        />
      );
    } else if (value === "warning") {
      return (
        <RiErrorWarningLine
          style={{
            color: "#FBBF24",
            width: "20px",
            height: "18px",
            marginLeft: "16px",
            marginBottom: "16px",
          }}
        />
      );
    } else if (value === "error") {
      return (
        <IoCloseCircleOutline
          style={{
            color: "#F87171",
            width: "20px",
            height: "18px",
            marginLeft: "16px",
            marginBottom: "16px",
          }}
        />
      );
    } else if (value === "neutral") {
      return (
        <HiOutlineInformationCircle
          style={{
            color: "#60A5FA",
            width: "20px",
            height: "18px",
            marginLeft: "16px",
            marginBottom: "16px",
          }}
        />
      );
    }
  }
  return (
    <div className={`toast ${type}`}>
      {myTipe(type)}
      <div className="toast-content">
        <p className={`${type}headT`}>{title}</p>
        <p className={` ${type}bodyT`}>{text}</p>
      </div>
    </div>
  );
}
