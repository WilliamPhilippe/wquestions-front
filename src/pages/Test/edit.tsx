import { useQuery } from "@apollo/client";
import { useAtomValue } from "jotai";
import { LoadingContainer } from "../../components/Loading/loading";
import { GET_QUESTIONS } from "../../data/question";
import { QueryQuestionsArgs, Question } from "../../types";
import { paramsForNewTest } from "./atoms/useAtoms";

export const EditTest = () => {
  const testParams = useAtomValue(paramsForNewTest);

  const { data, loading, error } = useQuery<Question, QueryQuestionsArgs>(
    GET_QUESTIONS,
    {
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
    }
  );

  return <LoadingContainer />;

  return <p>edit</p>;
};
