import { Button } from "@mui/material";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { questionsListAtom } from "../../pages/Test/atoms/useAtoms";
import { ROUTES } from "../../routes/paths";
import { Question, Test } from "../../types";
import { FROM_EXISTING_PATH } from "../../utils/consts";

interface IProps {
  test: Test;
}
export const TestLI = ({ test }: IProps) => {
  const navigate = useNavigate();
  const setQuestionsAtom = useAtom(questionsListAtom)[1];
  const questions = test.data as Question[];

  const onClickSeeTest = () => {
    setQuestionsAtom(questions);
    navigate(`${ROUTES.test.edit}/${FROM_EXISTING_PATH}`);
  };

  return (
    <div className="w-fit3 px-2 pt-2 pb-1 min-h-28 border rounded bg-blue-50/50 hover:bg-blue-50 my-1 mr-2 center flex flex-col items-start">
      <div className="my-auto flex flex-col">
        <strong className="mb-1">
          {questions.length} {questions.length === 1 ? "questão" : "questões"}
        </strong>
        <span className="text-sm leading-none">Salvo em: </span>
        <strong className="leading-tight">
          {new Date(test.createdAt).toLocaleDateString()}
        </strong>
      </div>
      <div className="flex flex-row justify-center w-full items-end mt-auto mb-0">
        <Button onClick={onClickSeeTest}>Ver prova</Button>
      </div>
    </div>
  );
};
