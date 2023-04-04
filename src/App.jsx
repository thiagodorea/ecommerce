import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import Login from "./pages/login";
import Home from "../src/pages/home"

import './styles.css'
import Info from "./pages/info";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info/:idTime" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
