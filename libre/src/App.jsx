import "./css/App.css";
import "./css/badgers.css";
import "./css/banners.css";
import Banners from "./components/Banners";

function App() {
  return (
    <>
      <Banners
        type="sucess"
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banners
        type="warning"
        title="Attention"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
      <Banners
        type="error"
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
      <Banners
        type="neutral"
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banners type="sucess" title="Update available" />
    </>
  );
}

export default App;
