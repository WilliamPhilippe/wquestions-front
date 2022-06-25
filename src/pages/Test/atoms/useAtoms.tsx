import { atom } from "jotai";
import { Question, SubTopicsType, TopicType } from "../../../types.d";
import { TestType } from "../types";

export const paramsForNewTest = atom<TestType>({
  level: 3,
  questionQuantity: 10,
  subTopics: [
    SubTopicsType.Soma,
    SubTopicsType.Subtracao,
    SubTopicsType.Angulos,
    SubTopicsType.Divisao,
  ],
  topic: TopicType.Matematica,
});

export const questionsListAtom = atom<Question[]>([]);
