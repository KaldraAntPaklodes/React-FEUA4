import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header title="Title" description="Some about text in two lines" />
      <Main
        title="Portfolio"
        description="dsadasd dasd asdasd asdasda sdsadas dasdas"
      />
    </div>
  );
}

export default App;
