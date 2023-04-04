import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import Login from "./pages/login";
import Home from "../src/pages/home"

import './styles.css'
import Info from "./pages/info";
import Produto from "./pages/produto";
import NotFound from "./pages/notFound";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info/:idTime" element={<Info />} />
          <Route path="/produtos/:idTime" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
