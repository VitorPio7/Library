import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import "./css/card.css";
import "./css/testimonial.css";
import "./css/testimonial2.css";
import "./css/tooltip1.css";
import Tolltip1 from "./components/Tooltip1";
function App() {
  return (
    <div className="div">
      <Tolltip1
        title="Archive notes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
      />
    </div>
  );
}

export default App;
