import {
  AddCircleOutlineRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import { useAtom } from "jotai";
import { useContext, useState } from "react";
import { UseAuditLogContext } from "../../../../context/useAuditLog";
import { Question } from "../../../../types";
import { formatSetence } from "../../../../utils/text/formatInput";
import { questionsListAtom } from "../../atoms/useAtoms";

interface IProps {
  question: Question;
  idx: number;
}

export const AddQuestionLI = ({ question, idx }: IProps) => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const [questions, setQuestions] = useAtom(questionsListAtom);
  const [imgError, setImgError] = useState(false);

  const isAdded = !!questions.find((q) => q.id === question.id);

  const onAdd = () => {
    if (!questions.find((q) => q.id === question.id)) {
      setQuestions((state) => [...state, question]);
    }
  };

  return (
    <li className="flex flex-col justify-center items-stretch border rounded mb-4 py-2 px-4">
      <div className="flex flex-row justify-between items-center">
        <div />
        <div>
          {!isAdded && (
            <AddCircleOutlineRounded
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={onDispatchAction(
                onAdd,
                "ADD_QUESTAO_MODAL_MAIS_QUESTOES",
                { question }
              )}
            />
          )}
          {isAdded && <CheckCircleRounded className="text-green-500" />}
        </div>
      </div>
      <p className="text-left  ">{formatSetence(question.description)}</p>
      {question.image && !imgError && (
        <img
          className="max-w-xs mx-auto"
          onError={() => setImgError(true)}
          src={question.image}
          alt={question.description}
        />
      )}

      <ul>
        {question.multiple &&
          question.options.map((op) => <li key={op}>{op}</li>)}
      </ul>

      <p className="text-gray-400/40 text-sm font-bold ml-auto mt-4">
        Resposta(s): {question.answer}
      </p>
    </li>
  );
};
