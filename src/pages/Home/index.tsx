import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { UserId } from "../../components/UserId/userId";
import { ROUTES } from "../../routes/paths";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <CenteredContainer>
        <div className="flex flex-row justify-evenly">
          <Button
            variant="outlined"
            onClick={() => navigate(ROUTES.question.create)}
          >
            Criar Questão
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(ROUTES.test.create)}
          >
            Criar Prova
          </Button>
        </div>
      </CenteredContainer>
      <CenteredContainer className="mt-2">
        <UserId />
      </CenteredContainer>
    </>
  );
};
