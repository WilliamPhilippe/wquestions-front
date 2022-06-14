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
  query Question {
    questions {
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
