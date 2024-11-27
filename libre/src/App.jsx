import "./css/App.css";
import "./css/badgers.css";
import Badgers from "./components/Badgers";
function App() {
  return (
    <>
      <Badgers color={"green"} type={"round"}>
        {"Badge"}
      </Badgers>
      <Badgers color={"red"} type={"square"}>
        {"Badge"}
      </Badgers>
    </>
  );
}

export default App;
