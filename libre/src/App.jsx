import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import "./css/card.css";

import Card from "./components/Card";
function App() {
  return (
    <div className="div">
      <Card
        maintext="Easy Deployment"
        bodyText="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        animation={true}
      />
    </div>
  );
}

export default App;
