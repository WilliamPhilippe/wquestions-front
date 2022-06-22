import { Question } from "../../../../types.d";
import { AddQuestionLI } from "./addQuestionLI";

interface IProps {
  questions: Question[];
}

export const QuestionsSection = ({ questions }: IProps) => {
  return (
    <ul>
      {questions.map((q, idx) => (
        <AddQuestionLI key={q.id} idx={idx} question={q} />
      ))}
    </ul>
  );
};
