import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import Login from "./pages/login";
import Home from "../src/pages/home"

import './styles.css'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
