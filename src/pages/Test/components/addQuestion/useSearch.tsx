import { useApolloClient } from "@apollo/client";
import { GET_QUESTIONS } from "../../../../data/question";
import {
  QueryQuestionsArgs,
  Question,
  SubTopicsType,
  TopicType,
} from "../../../../types.d";

export const useSearch = () => {
  const client = useApolloClient();

  const onSearch = async (topic: TopicType, subTopics: SubTopicsType[]) => {
    const { data, loading, error } = await client.query<
      { questions: Question[] },
      QueryQuestionsArgs
    >({
      query: GET_QUESTIONS,
      variables: {
        where: {
          AND: [
            { topic: { equals: topic } },
            { subTopics: { hasSome: subTopics } },
          ],
        },
      },
      fetchPolicy: "network-only",
    });

    return { data, loading, error };
  };

  return { onSearch };
};
