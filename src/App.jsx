import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import './styles.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
