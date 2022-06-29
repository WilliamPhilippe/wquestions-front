import { Routes as RouterDom, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreateQuestion } from "../pages/Question/create";
import { CreateTest } from "../pages/Test/create";
import { EditTest } from "../pages/Test/edit";
import { ROUTES } from "./paths";

export const Router = () => {
  return (
    <BrowserRouter>
      <RouterDom>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.question.create} element={<CreateQuestion />} />
        <Route path={ROUTES.test.create} element={<CreateTest />} />
        <Route path={ROUTES.test.edit}>
          <Route path={ROUTES.test.edit_mode} element={<EditTest />} />
          <Route path={""} element={<EditTest />} />
        </Route>
      </RouterDom>
    </BrowserRouter>
  );
};
