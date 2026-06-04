import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Inventory from "./pages/Inventory"


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App






