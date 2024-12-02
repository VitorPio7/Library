import { HiOutlineInbox } from "react-icons/hi";

export default function Tooltip1({ title, text, type }) {
  return (
    <div className="mainDiv">
      <div className={`firtText-${type}`}>
        <HiOutlineInbox
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "10px",
            marginTop: "15px",
            marginRight: "15px",
          }}
        />
        <div className="titleAndText">
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>
        <button>X</button>
      </div>
      <div className={`triangle-${type}`}></div>
    </div>
  );
}
