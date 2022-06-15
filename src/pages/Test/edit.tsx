import { useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { useAtomValue } from "jotai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { LoadingContainer } from "../../components/Loading/loading";
import { SubTitleBlack, TitleBlue } from "../../components/Text/titles";
import { GET_QUESTIONS } from "../../data/question";
import { ROUTES } from "../../routes/paths";
import { QueryQuestionsArgs, Question } from "../../types";
import { paramsForNewTest } from "./atoms/useAtoms";
import { EditQuestion } from "./components/editQuestion";

export const EditTest = () => {
  const navigate = useNavigate();
  const testParams = useAtomValue(paramsForNewTest);
  if (
    !testParams.topic ||
    !testParams.level ||
    !testParams.questionQuantity ||
    !testParams.subTopics.length
  ) {
    navigate(ROUTES.test.create);
  }

  const { data, loading, error } = useQuery<
    { questions: Question[] },
    QueryQuestionsArgs
  >(GET_QUESTIONS, {
    variables: {
      take: testParams.questionQuantity,
      where: {
        AND: [
          { topic: { equals: testParams.topic } },
          { subTopics: { hasSome: testParams.subTopics } },
          {
            level: {
              gte: testParams.level - 2 > 0 ? testParams.level - 2 : 1,
            },
          },
          {
            level: {
              lte: testParams.level + 2 <= 10 ? testParams.level + 2 : 10,
            },
          },
        ],
      },
    },
  });

  if (loading) return <LoadingContainer />;

  if (error || !data || !data.questions) {
    return <CenteredContainer>Desculpe! Algo deu errado.</CenteredContainer>;
  }

  return (
    <CenteredContainer>
      <div className="flex flex-row item-center flex-grow">
        <div className="w-1/4 mr-auto text-left">
          <Button
            disableElevation
            variant="text"
            color="inherit"
            onClick={() => navigate(ROUTES.home)}
          >
            Voltar
          </Button>
        </div>
        <TitleBlue>Edite sua prova:</TitleBlue>
        <div className="w-1/4 ml-auto text-right">
          <Button disableElevation variant="text" type="submit">
            Salvar
          </Button>
        </div>
      </div>

      <SubTitleBlack>Questões:</SubTitleBlack>
      <ul>
        {data.questions.map((question, idx) => (
          <EditQuestion key={question.id} question={question} idx={idx} />
        ))}
      </ul>
    </CenteredContainer>
  );
};
