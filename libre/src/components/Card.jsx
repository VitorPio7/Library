import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({ maintext, bodyText, animation }) {
  return (
    <div className={animation ? "card transition" : "card"}>
      <div className="imgCloud">
        <IoCloudUploadOutline
          style={{
            width: "25px",
            color: "white",
            height: "30px",
          }}
        />
      </div>
      <h2>{maintext}</h2>
      <p>{bodyText}</p>
    </div>
  );
}
