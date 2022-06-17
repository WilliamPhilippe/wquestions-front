import {
  ArrowCircleDownRounded,
  ArrowCircleUpRounded,
  DeleteRounded,
  EditRounded,
} from "@mui/icons-material";
import { Question } from "../../../types.d";
import { formatSetence } from "../../../utils/text/formatInput";

interface IProps {
  question: Question;
  idx: number;
  setToUp: () => void;
  setToDown: () => void;
  setDelete: () => void;
  edit: () => void;
}

export const EditQuestion = ({
  question,
  edit,
  idx,
  setDelete,
  setToDown,
  setToUp,
}: IProps) => {
  return (
    <li className="flex flex-col justify-center items-stretch border rounded mb-4 py-2 px-4">
      <div className="flex flex-row justify-between items-center">
        <div></div>
        <div>
          <ArrowCircleDownRounded
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={setToDown}
          />
          <ArrowCircleUpRounded
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={setToUp}
          />
          <EditRounded className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2" />
          <DeleteRounded className="text-gray-400 hover:text-red-600 cursor-pointer" />
        </div>
      </div>
      <p className="text-left  ">{formatSetence(question.description)}</p>
      {question.image && (
        <img
          className="max-w-xs mx-auto"
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
