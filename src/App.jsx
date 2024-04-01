import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import FullPokedex from "./pages/FullPokedex";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/utils/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/favorites">
            <Route index element={<Favorites />} />
          </Route>
          <Route path="/complete-dex">
            <Route index element={<FullPokedex />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
