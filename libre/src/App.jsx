import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import "./css/card.css";
import "./css/testimonial.css";
import "./css/testimonial2.css";
import Testimonial2 from "./components/Testimonial2";
function App() {
  return (
    <div className="div">
      <Testimonial2
        img={"logo.png"}
        type={"vertical"}
        info={
          "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
        }
        name={"May Andersons"}
        adress={"Workcation, CTO"}
      />
    </div>
  );
}

export default App;
