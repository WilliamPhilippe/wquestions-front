import { Question } from "../../../types.d";
import { formatSetence } from "../../../utils/text/formatInput";

interface IProps {
  question: Question;
  idx: number;
}

export const EditQuestion = ({ question }: IProps) => {
  return (
    <li className="flex flex-col justify-center items-stretch border rounded mb-4 py-2 px-4">
      <p className="text-left  ">{formatSetence(question.description)}</p>
      {question.image && (
        <img src={question.image} alt={question.description} />
      )}

      <ul>
        {question.multiple &&
          question.options.map((op) => <li key={op}>{op}</li>)}
      </ul>

      <p className="text-red-500 font-bold">{question.answer}</p>
    </li>
  );
};
