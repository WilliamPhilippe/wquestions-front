import { atom } from "jotai";
import { Question, TopicType } from "../../../types.d";
import { TestType } from "../types";

export const paramsForNewTest = atom<TestType>({
  level: 3,
  questionQuantity: 10,
  subTopics: [],
  topic: TopicType.Matematica,
  topicLogic: "OR",
});

export const questionsListAtom = atom<Question[]>([]);
