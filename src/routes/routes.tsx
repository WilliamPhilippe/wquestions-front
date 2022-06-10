import { Routes as RouterDom, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { SecondPage } from "../pages/SecondPage";
import { ROUTES } from "./paths";

export const Router = () => {
  return (
    <BrowserRouter>
      <RouterDom>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.secondPage} element={<SecondPage />} />
      </RouterDom>
    </BrowserRouter>
  );
};
