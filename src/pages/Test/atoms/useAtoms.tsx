import { atom } from "jotai";
import { TopicType } from "../../../types.d";
import { TestType } from "../types";

export const paramsForNewTest = atom<TestType>({
  level: 5,
  questionQuantity: 1,
  subTopics: [],
  topic: TopicType.Matematica,
});
