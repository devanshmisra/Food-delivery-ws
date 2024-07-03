import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import FoodDetails from "./pages/FoodDetails";
import FoodListing from "./pages/FoodListing";


const Container = styled.div``;

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Container>
        <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favorites" exact element={<Favourites />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/dishes/:id" exact element={<FoodDetails />} />
          <Route path="/dishes" exact element={<FoodListing />} />
        </Routes>
        {openAuth && (
        <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
          )}
      </Container>
    </BrowserRouter>
  </ThemeProvider>

  );
}

export default App;
