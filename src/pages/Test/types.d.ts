import { SubTopicsType, TopicType } from "../../types";

export type TestType = {
  topic: TopicType;
  subTopics: SubTopicsType[];
  questionQuantity: number;
  level: number;
};
