import "./App.css";
import Nav from "./components/Navigation.tsx";
import Main from "./pages/Main.tsx";
import Instance from "./pages/Instance.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/instance" element={<Instance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
