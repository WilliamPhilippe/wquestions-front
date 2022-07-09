import { useMutation, useQuery } from "@apollo/client";
import { Button, Divider } from "@mui/material";
import toast from "react-hot-toast";
import { useAtom, useAtomValue } from "jotai";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { LoadingContainer } from "../../components/Loading/loading";
import { SubTitleBlack, TitleBlue } from "../../components/Text/titles";
import { GET_QUESTIONS } from "../../data/question";
import { ROUTES } from "../../routes/paths";
import {
  MutationCustomCreateTestArgs,
  QueryQuestionsArgs,
  Question,
} from "../../types.d";
import { paramsForNewTest, questionsListAtom } from "./atoms/useAtoms";
import { EditQuestion } from "./components/editQuestion";
import { AddQuestion } from "./components/addQuestion/modalAddQuestion";
import { PickQuestionForModal } from "./types";
import { ModalOnCreateQuestion } from "./components/modalOnCreateQuestion";
import { PdfDownloadButton } from "./components/pdf/downloadButton";
import { CREATE_TEST_MUTATION } from "../../data/test";
import { userIdAtom } from "../../components/UserId/userIdAtom";
import { FROM_EXISTING_PATH } from "../../utils/consts";
import { UseAuditLogContext } from "../../context/useAuditLog";

export const EditTest = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  const testParams = useAtomValue(paramsForNewTest);
  const userIdKey = useAtomValue(userIdAtom);
  const [questions, setQuestions] = useAtom(questionsListAtom);
  const { onDispatchAction } = useContext(UseAuditLogContext);

  const fromExisting = mode === FROM_EXISTING_PATH;

  if (
    !fromExisting &&
    (!testParams.topic ||
      !testParams.level ||
      !testParams.questionQuantity ||
      !testParams.subTopics.length)
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
          {
            subTopics:
              testParams.topicLogic === "AND"
                ? { hasEvery: testParams.subTopics }
                : { hasSome: testParams.subTopics },
          },
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
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!fromExisting && data?.questions?.length) {
      setQuestions(data.questions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onCreateQuestion = (question: Question) => {
    if (!question.id || !question.description || !question.answer) {
      return toast.error("Descrição e resposta são obrigatórios.");
    }
    setQuestions((state) => [...state, question]);
  };

  const [createTestMutation] = useMutation<
    boolean,
    MutationCustomCreateTestArgs
  >(CREATE_TEST_MUTATION);

  const onSaveTest = async () => {
    const loadingToast = toast.loading("Salvando prova...");
    if (!userIdKey) {
      return toast.error("Você não tem um usuário neste sistema.");
    }

    try {
      await createTestMutation({
        variables: {
          data: {
            userKey: userIdKey,
            data: questions,
          },
        },
      });
      toast.success("Prova salva.");
    } catch (err) {
      toast.error("Não foi possível salvar essa prova.");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

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
            onClick={onDispatchAction(() => navigate(-1), "VOLTAR_EDITE_PROVA")}
          >
            Voltar
          </Button>
        </div>
        <TitleBlue>Edite sua prova:</TitleBlue>
        <div className="w-1/4 ml-auto text-right">
          <Button
            disableElevation
            variant="text"
            onClick={() =>
              onDispatchAction(onSaveTest, "GUARDAR_QUESTOES_EDITE_PROVA")(
                "OVERRIDE",
                { questions }
              )
            }
          >
            Guardar Questões
          </Button>
        </div>
      </div>
      <Divider />

      <SubTitleBlack>Questões:</SubTitleBlack>
      <ul>
        {questions.map((question, idx) => (
          <EditQuestion
            key={question.id}
            question={question}
            idx={idx}
            onDelete={onDispatchAction(
              () => onDelete(idx),
              "DELETE_QUESTAO_EDITE_PROVA",
              { idx }
            )}
            setToDown={onDispatchAction(
              () => setToDown(idx),
              "DOWN_QUESTAO_EDITE_PROVA",
              { idx }
            )}
            setToUp={onDispatchAction(
              () => setToUp(idx),
              "UP_QUESTAO_EDITE_PROVA",
              { idx }
            )}
            onEdit={onEdit}
          />
        ))}
      </ul>

      <div className="flex flex-row justify-between items-center">
        <AddQuestion />
        <ModalOnCreateQuestion onCreate={onCreateQuestion} />
      </div>
      <Divider />
      <div className="flex flex-row justify-between mt-2">
        <Button
          disableElevation
          variant="text"
          color="inherit"
          onClick={onDispatchAction(() => navigate(-1), "VOLTAR_EDITE_PROVA")}
        >
          Voltar
        </Button>
        <div>
          <PdfDownloadButton questions={questions} withAnswers />
          <PdfDownloadButton questions={questions} />
          <PdfDownloadButton questions={questions} aleatory />
        </div>
      </div>
    </CenteredContainer>
  );
};
