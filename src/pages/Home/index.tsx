import { Button } from "@mui/material";
import { useAtom } from "jotai";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { UserId } from "../../components/UserId/userId";
import { UseAuditLogContext } from "../../context/useAuditLog";
import { ROUTES } from "../../routes/paths";
import { FROM_EXISTING_PATH } from "../../utils/consts";
import { questionsListAtom } from "../Test/atoms/useAtoms";

export const Home = () => {
  const navigate = useNavigate();
  const setQuestions = useAtom(questionsListAtom)[1];

  const { onDispatchAction } = useContext(UseAuditLogContext);

  const onEmptyTest = () => {
    setQuestions([]);
    navigate(`${ROUTES.test.edit}/${FROM_EXISTING_PATH}`);
  };

  return (
    <>
      <CenteredContainer>
        <div className="flex flex-row justify-center mb-4">
          <Button
            variant="outlined"
            onClick={onDispatchAction(
              () => navigate(ROUTES.test.create),
              "CRIAR_PROVA_HOME"
            )}
          >
            Criar Prova
          </Button>
        </div>
        <div className="flex flex-row justify-center">
          <Button
            variant="text"
            onClick={onDispatchAction(
              onEmptyTest,
              "CRIAR_PROVA_EM_BRANCO_HOME"
            )}
            sx={{ fontSize: 12 }}
          >
            Criar Prova em Branco
          </Button>
          <Button
            variant="text"
            onClick={onDispatchAction(
              () => navigate(ROUTES.question.create),
              "CONTRIBUIR_COM_QUESTAO_HOME"
            )}
            sx={{ fontSize: 12 }}
          >
            Contribuir com questão
          </Button>
        </div>
      </CenteredContainer>
      <CenteredContainer className="mt-2">
        <UserId />
      </CenteredContainer>
    </>
  );
};
