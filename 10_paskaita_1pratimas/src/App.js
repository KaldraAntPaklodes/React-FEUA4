import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
