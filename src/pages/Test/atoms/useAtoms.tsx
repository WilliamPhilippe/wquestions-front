import { atom } from "jotai";
import { SubTopicsType, TopicType } from "../../../types.d";
import { TestType } from "../types";

export const paramsForNewTest = atom<TestType>({
  level: 3,
  questionQuantity: 10,
  subTopics: [SubTopicsType.Divisao, SubTopicsType.Subtracao],
  topic: TopicType.Matematica,
});
