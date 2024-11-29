import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import "./css/card.css";
import "./css/testimonial.css";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="div">
      <Testimonial
        text1={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        }
        name={"May Andersons"}
        local={"Workcation, CTO"}
        img={"./imgPerfil.png"}
        type={"horizont"}
      />
    </div>
  );
}

export default App;
