import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/Main.layout";
import { Home } from "../pages/home/Home.page";
import { Restaurants } from "../pages/restaurants/Restaurants.page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="restaurants" element={<Restaurants />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
