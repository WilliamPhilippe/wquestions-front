import { Routes as RouterDom, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreateQuestion } from "../pages/Question/create";
import { CreateTest } from "../pages/Test/create";
import { ROUTES } from "./paths";

export const Router = () => {
  return (
    <BrowserRouter>
      <RouterDom>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.question.create} element={<CreateQuestion />} />
        <Route path={ROUTES.test.create} element={<CreateTest />} />
      </RouterDom>
    </BrowserRouter>
  );
};
