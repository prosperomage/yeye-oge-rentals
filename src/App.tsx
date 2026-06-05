import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import Inventory from "./pages/Inventory"


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/inventory" element={<Inventory />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App






