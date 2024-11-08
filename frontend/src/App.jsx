
// Router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import GlobalStyle from "./globalstyles/GlobalStyle";
import { ContainerStyled } from "./AppStyled";




function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
      <Navbar />
        <ContainerStyled>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
        </Routes>
        </ContainerStyled>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
