import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Users from "./pages/Users"
import User from './components/User';

function App() {
  return (
    <div>
      <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
