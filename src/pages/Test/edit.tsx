import { useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { LoadingContainer } from "../../components/Loading/loading";
import { SubTitleBlack, TitleBlue } from "../../components/Text/titles";
import { GET_QUESTIONS } from "../../data/question";
import { ROUTES } from "../../routes/paths";
import { QueryQuestionsArgs, Question } from "../../types";
import { paramsForNewTest } from "./atoms/useAtoms";
import { EditQuestion } from "./components/editQuestion";
import { PickQuestionForModal } from "./types";

export const EditTest = () => {
  const navigate = useNavigate();
  const testParams = useAtomValue(paramsForNewTest);

  const [questions, setQuestions] = useState<Question[]>([]);

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

  useEffect(() => {
    if (data?.questions?.length) {
      setQuestions(data.questions);
    }
  }, [data, loading]);

  const setToUp = (idx: number) => {
    if (idx <= 0) return;

    const tempQuestions = [...questions];

    const aux = tempQuestions[idx];
    tempQuestions[idx] = tempQuestions[idx - 1];
    tempQuestions[idx - 1] = aux;

    setQuestions(tempQuestions);
  };

  const setToDown = (idx: number) => {
    if (idx >= questions.length - 1) return;

    const tempQuestions = [...questions];

    const aux = tempQuestions[idx];
    tempQuestions[idx] = tempQuestions[idx + 1];
    tempQuestions[idx + 1] = aux;

    setQuestions(tempQuestions);
  };

  const onDelete = (idx: number) => {
    setQuestions((state) => state.filter((_, index) => idx !== index));
  };

  const onEdit = (index: number, question: PickQuestionForModal) => {
    setQuestions((state) =>
      state.map((q, indexMap) => {
        return index === indexMap
          ? {
              id: q.id,
              level: q.level,
              subTopics: q.subTopics,
              topic: q.topic,

              description: question.description,
              answer: question.answer,
              image: question.image,
              options: question.options,
              multiple: question.multiple,
            }
          : q;
      })
    );
  };

  useEffect(() => {
    console.info("use", questions);
  }, [questions]);

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
            Salvar PDF
          </Button>
        </div>
      </div>

      <SubTitleBlack>Questões:</SubTitleBlack>
      <ul>
        {questions.map((question, idx) => (
          <EditQuestion
            key={question.id}
            question={question}
            idx={idx}
            onDelete={() => onDelete(idx)}
            setToDown={() => setToDown(idx)}
            setToUp={() => setToUp(idx)}
            onEdit={onEdit}
          />
        ))}
      </ul>
      <div className="flex flex-row justify-between">
        <Button
          disableElevation
          variant="text"
          color="inherit"
          onClick={() => navigate(ROUTES.home)}
        >
          Voltar
        </Button>
        <Button disableElevation variant="text" type="submit">
          Salvar PDF
        </Button>
      </div>
    </CenteredContainer>
  );
};
