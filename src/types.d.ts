export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
};

export type EnumSubTopicsTypeNullableListFilter = {
  equals?: InputMaybe<Array<SubTopicsType>>;
  has?: InputMaybe<SubTopicsType>;
  hasEvery?: InputMaybe<Array<SubTopicsType>>;
  hasSome?: InputMaybe<Array<SubTopicsType>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumTopicTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TopicType>;
};

export type EnumTopicTypeFilter = {
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type EnumTopicTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTopicTypeFilter>;
  _min?: InputMaybe<NestedEnumTopicTypeFilter>;
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyQuestion: AffectedRowsOutput;
  createQuestion: Question;
  deleteManyQuestion: AffectedRowsOutput;
  deleteQuestion?: Maybe<Question>;
  updateManyQuestion: AffectedRowsOutput;
  updateQuestion?: Maybe<Question>;
  upsertQuestion: Question;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationDeleteManyQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};

export type NestedEnumTopicTypeFilter = {
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type NestedEnumTopicTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTopicTypeFilter>;
  _min?: InputMaybe<NestedEnumTopicTypeFilter>;
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateQuestion: AggregateQuestion;
  findFirstQuestion?: Maybe<Question>;
  groupByQuestion: Array<QuestionGroupBy>;
  question?: Maybe<Question>;
  questions: Array<Question>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryGroupByQuestionArgs = {
  by: Array<QuestionScalarFieldEnum>;
  having?: InputMaybe<QuestionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  answer: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  options: Array<Scalars['String']>;
  subTopics: Array<SubTopicsType>;
  topic: TopicType;
};

export type QuestionAvgAggregate = {
  __typename?: 'QuestionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type QuestionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  _all: Scalars['Int'];
  answer: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  level: Scalars['Int'];
  options: Scalars['Int'];
  subTopics: Scalars['Int'];
  topic: Scalars['Int'];
};

export type QuestionCountOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  subTopics?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionCreateInput = {
  answer: Scalars['String'];
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  options?: InputMaybe<QuestionCreateoptionsInput>;
  subTopics?: InputMaybe<QuestionCreatesubTopicsInput>;
  topic: TopicType;
};

export type QuestionCreateManyInput = {
  answer: Scalars['String'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  options?: InputMaybe<QuestionCreateoptionsInput>;
  subTopics?: InputMaybe<QuestionCreatesubTopicsInput>;
  topic: TopicType;
};

export type QuestionCreateoptionsInput = {
  set: Array<Scalars['String']>;
};

export type QuestionCreatesubTopicsInput = {
  set: Array<SubTopicsType>;
};

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
  answer: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  options?: Maybe<Array<Scalars['String']>>;
  subTopics?: Maybe<Array<SubTopicsType>>;
  topic: TopicType;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  answer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  topic?: Maybe<TopicType>;
};

export type QuestionMaxOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  answer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  topic?: Maybe<TopicType>;
};

export type QuestionMinOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionSumOrderByAggregateInput>;
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  subTopics?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  subTopics?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export enum QuestionScalarFieldEnum {
  Answer = 'answer',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Level = 'level',
  Options = 'options',
  SubTopics = 'subTopics',
  Topic = 'topic'
}

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  answer?: InputMaybe<StringWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  level?: InputMaybe<IntWithAggregatesFilter>;
  options?: InputMaybe<StringNullableListFilter>;
  subTopics?: InputMaybe<EnumSubTopicsTypeNullableListFilter>;
  topic?: InputMaybe<EnumTopicTypeWithAggregatesFilter>;
};

export type QuestionSumAggregate = {
  __typename?: 'QuestionSumAggregate';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

export type QuestionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
};

export type QuestionUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  options?: InputMaybe<QuestionUpdateoptionsInput>;
  subTopics?: InputMaybe<QuestionUpdatesubTopicsInput>;
  topic?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  options?: InputMaybe<QuestionUpdateoptionsInput>;
  subTopics?: InputMaybe<QuestionUpdatesubTopicsInput>;
  topic?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateoptionsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type QuestionUpdatesubTopicsInput = {
  push?: InputMaybe<Array<SubTopicsType>>;
  set?: InputMaybe<Array<SubTopicsType>>;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  level?: InputMaybe<IntFilter>;
  options?: InputMaybe<StringNullableListFilter>;
  subTopics?: InputMaybe<EnumSubTopicsTypeNullableListFilter>;
  topic?: InputMaybe<EnumTopicTypeFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum SubTopicsType {
  Algebra = 'ALGEBRA',
  Angulos = 'ANGULOS',
  Areas = 'AREAS',
  Comprimento = 'COMPRIMENTO',
  Congruencia = 'CONGRUENCIA',
  Conversao = 'CONVERSAO',
  Divisao = 'DIVISAO',
  Estatistica = 'ESTATISTICA',
  EventosAleatorios = 'EVENTOS_ALEATORIOS',
  Formas = 'FORMAS',
  Fracoes = 'FRACOES',
  Geometria = 'GEOMETRIA',
  Graficos = 'GRAFICOS',
  GrandezasEMedidas = 'GRANDEZAS_E_MEDIDAS',
  Localizacao = 'LOCALIZACAO',
  MassaVolume = 'MASSA_VOLUME',
  Multiplicacao = 'MULTIPLICACAO',
  NumerosDecimais = 'NUMEROS_DECIMAIS',
  OperacoesComFracoes = 'OPERACOES_COM_FRACOES',
  Perimetro = 'PERIMETRO',
  Pesquisas = 'PESQUISAS',
  Porcentagem = 'PORCENTAGEM',
  Probabilidade = 'PROBABILIDADE',
  Proporcionalidade = 'PROPORCIONALIDADE',
  Proporcoes = 'PROPORCOES',
  Razoes = 'RAZOES',
  Soma = 'SOMA',
  Subtracao = 'SUBTRACAO',
  Tempo = 'TEMPO',
  Triangulos = 'TRIANGULOS'
}

export enum TopicType {
  Artes = 'ARTES',
  Ciencias = 'CIENCIAS',
  Geografia = 'GEOGRAFIA',
  Historia = 'HISTORIA',
  Matematica = 'MATEMATICA',
  Portugues = 'PORTUGUES'
}
