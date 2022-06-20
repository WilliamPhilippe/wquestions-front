import {
  ArrowCircleDownRounded,
  ArrowCircleUpRounded,
  DeleteRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Question } from "../../../types.d";
import { formatSetence } from "../../../utils/text/formatInput";
import { PickQuestionForModal } from "../types";
import { ModalOnEditQuestion } from "./modalOnEditQuestion";

interface IProps {
  question: Question;
  idx: number;
  setToUp: () => void;
  setToDown: () => void;
  onDelete: () => void;
  onEdit: (idx: number, question: PickQuestionForModal) => void;
}

export const EditQuestion = ({
  question,
  onEdit,
  idx,
  onDelete,
  setToDown,
  setToUp,
}: IProps) => {
  const [imgError, setImgError] = useState(false);
  return (
    <li className="flex flex-col justify-center items-stretch border rounded mb-4 py-2 px-4">
      <div className="flex flex-row justify-between items-center">
        <div />
        <div>
          <ArrowCircleDownRounded
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={setToDown}
          />
          <ArrowCircleUpRounded
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={setToUp}
          />
          <ModalOnEditQuestion idx={idx} question={question} onEdit={onEdit} />
          <DeleteRounded
            className="text-gray-400 hover:text-red-600 cursor-pointer"
            onClick={onDelete}
          />
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
