import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import "./css/card.css";
import "./css/testimonial.css";
import "./css/testimonial2.css";
import "./css/tooltip1.css";
import "./css/toast.css";
import Toast from "./components/Toast";
function App() {
  return (
    <div className="div">
      <Toast title="Success" text="Your work has been saved" type="neutral" />
    </div>
  );
}

export default App;
