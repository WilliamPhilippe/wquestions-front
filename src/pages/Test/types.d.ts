import { Question, SubTopicsType, TopicType } from "../../types";

export type TestType = {
  topic: TopicType;
  subTopics: SubTopicsType[];
  questionQuantity: number;
  level: number;
  topicLogic: "AND" | "OR";
};

export type PickQuestionForModal = Pick<
  Question,
  "description" | "answer" | "multiple" | "image" | "options"
>;
