import { gql } from "@apollo/client";

export const CREATE_QUESTION_MUTATION = gql`
  mutation CreateQuestion($data: QuestionCreateInput!) {
    createQuestion(data: $data) {
      answer
      description
      id
      image
      level
      multiple
      options
      subTopics
      topic
    }
  }
`;

export const GET_QUESTIONS = gql`
  query Questions(
    $where: QuestionWhereInput
    $cursor: QuestionWhereUniqueInput
    $distinct: [QuestionScalarFieldEnum!]
    $skip: Int
    $take: Int
  ) {
    questions(
      where: $where
      cursor: $cursor
      distinct: $distinct
      skip: $skip
      take: $take
    ) {
      id
      answer
      description
      image
      level
      multiple
      options
      subTopics
      topic
    }
  }
`;
