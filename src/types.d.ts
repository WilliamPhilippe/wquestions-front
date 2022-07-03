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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export enum ActionsType {
  AddQuestaoModalMaisQuestoes = 'ADD_QUESTAO_MODAL_MAIS_QUESTOES',
  BaixarEmOrdemAleatorioaEditeProva = 'BAIXAR_EM_ORDEM_ALEATORIOA_EDITE_PROVA',
  BaixarProvaEditeProva = 'BAIXAR_PROVA_EDITE_PROVA',
  BuscarMaisQuestoesEditeProva = 'BUSCAR_MAIS_QUESTOES_EDITE_PROVA',
  BuscarModalMaisQuestoes = 'BUSCAR_MODAL_MAIS_QUESTOES',
  CancelarModalCriarQuestao = 'CANCELAR_MODAL_CRIAR_QUESTAO',
  CancelarModalEditeQuestao = 'CANCELAR_MODAL_EDITE_QUESTAO',
  CarregarQuestoesCarregarUsuario = 'CARREGAR_QUESTOES_CARREGAR_USUARIO',
  ConcluirModalMaisQuestoes = 'CONCLUIR_MODAL_MAIS_QUESTOES',
  ContribuirComQuestaoHome = 'CONTRIBUIR_COM_QUESTAO_HOME',
  CriarCriarProvaForm = 'CRIAR_CRIAR_PROVA_FORM',
  CriarProvaEmBrancoHome = 'CRIAR_PROVA_EM_BRANCO_HOME',
  CriarProvaHome = 'CRIAR_PROVA_HOME',
  CriarQuestaoEditeProva = 'CRIAR_QUESTAO_EDITE_PROVA',
  DeleteQuestaoEditeProva = 'DELETE_QUESTAO_EDITE_PROVA',
  DownQuestaoEditeProva = 'DOWN_QUESTAO_EDITE_PROVA',
  EditeQuestaoEditeProva = 'EDITE_QUESTAO_EDITE_PROVA',
  EntrarNoSistemaHome = 'ENTRAR_NO_SISTEMA_HOME',
  GabaritoEditeProva = 'GABARITO_EDITE_PROVA',
  GuardarQuestoesEditeProva = 'GUARDAR_QUESTOES_EDITE_PROVA',
  LimparCriarProvaForm = 'LIMPAR_CRIAR_PROVA_FORM',
  LimparCriarQuestaoForm = 'LIMPAR_CRIAR_QUESTAO_FORM',
  SalvarCriarQuestaoForm = 'SALVAR_CRIAR_QUESTAO_FORM',
  SalvarModalCriarQuestao = 'SALVAR_MODAL_CRIAR_QUESTAO',
  SalvarModalEditeQuestao = 'SALVAR_MODAL_EDITE_QUESTAO',
  UpQuestaoEditeProva = 'UP_QUESTAO_EDITE_PROVA',
  UsarOutroUsuarioHome = 'USAR_OUTRO_USUARIO_HOME',
  VerProvaHome = 'VER_PROVA_HOME',
  VoltarCarregarUsuario = 'VOLTAR_CARREGAR_USUARIO',
  VoltarCriarProvaForm = 'VOLTAR_CRIAR_PROVA_FORM',
  VoltarCriarQuestaoForm = 'VOLTAR_CRIAR_QUESTAO_FORM',
  VoltarEditeProva = 'VOLTAR_EDITE_PROVA'
}

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAuditLog = {
  __typename?: 'AggregateAuditLog';
  _avg?: Maybe<AuditLogAvgAggregate>;
  _count?: Maybe<AuditLogCountAggregate>;
  _max?: Maybe<AuditLogMaxAggregate>;
  _min?: Maybe<AuditLogMinAggregate>;
  _sum?: Maybe<AuditLogSumAggregate>;
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
};

export type AggregateTest = {
  __typename?: 'AggregateTest';
  _avg?: Maybe<TestAvgAggregate>;
  _count?: Maybe<TestCountAggregate>;
  _max?: Maybe<TestMaxAggregate>;
  _min?: Maybe<TestMinAggregate>;
  _sum?: Maybe<TestSumAggregate>;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  action: ActionsType;
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  userKey: Scalars['String'];
};

export type AuditLogAvgAggregate = {
  __typename?: 'AuditLogAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AuditLogAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AuditLogCountAggregate = {
  __typename?: 'AuditLogCountAggregate';
  _all: Scalars['Int'];
  action: Scalars['Int'];
  createdAt: Scalars['Int'];
  data: Scalars['Int'];
  id: Scalars['Int'];
  userKey: Scalars['Int'];
};

export type AuditLogCountOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type AuditLogCreateInput = {
  action: ActionsType;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data?: InputMaybe<Scalars['JSON']>;
  userKey: Scalars['String'];
};

export type AuditLogCreateManyInput = {
  action: ActionsType;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['Int']>;
  userKey: Scalars['String'];
};

export type AuditLogGroupBy = {
  __typename?: 'AuditLogGroupBy';
  _avg?: Maybe<AuditLogAvgAggregate>;
  _count?: Maybe<AuditLogCountAggregate>;
  _max?: Maybe<AuditLogMaxAggregate>;
  _min?: Maybe<AuditLogMinAggregate>;
  _sum?: Maybe<AuditLogSumAggregate>;
  action: ActionsType;
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  userKey: Scalars['String'];
};

export type AuditLogMaxAggregate = {
  __typename?: 'AuditLogMaxAggregate';
  action?: Maybe<ActionsType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userKey?: Maybe<Scalars['String']>;
};

export type AuditLogMaxOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type AuditLogMinAggregate = {
  __typename?: 'AuditLogMinAggregate';
  action?: Maybe<ActionsType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userKey?: Maybe<Scalars['String']>;
};

export type AuditLogMinOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type AuditLogOrderByWithAggregationInput = {
  _avg?: InputMaybe<AuditLogAvgOrderByAggregateInput>;
  _count?: InputMaybe<AuditLogCountOrderByAggregateInput>;
  _max?: InputMaybe<AuditLogMaxOrderByAggregateInput>;
  _min?: InputMaybe<AuditLogMinOrderByAggregateInput>;
  _sum?: InputMaybe<AuditLogSumOrderByAggregateInput>;
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type AuditLogOrderByWithRelationInput = {
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export enum AuditLogScalarFieldEnum {
  Action = 'action',
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  UserKey = 'userKey'
}

export type AuditLogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AuditLogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AuditLogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AuditLogScalarWhereWithAggregatesInput>>;
  action?: InputMaybe<EnumActionsTypeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  data?: InputMaybe<JsonNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userKey?: InputMaybe<StringWithAggregatesFilter>;
};

export type AuditLogSumAggregate = {
  __typename?: 'AuditLogSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type AuditLogSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AuditLogUpdateInput = {
  action?: InputMaybe<EnumActionsTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  userKey?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AuditLogUpdateManyMutationInput = {
  action?: InputMaybe<EnumActionsTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  userKey?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AuditLogWhereInput = {
  AND?: InputMaybe<Array<AuditLogWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogWhereInput>>;
  OR?: InputMaybe<Array<AuditLogWhereInput>>;
  action?: InputMaybe<EnumActionsTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<IntFilter>;
  userKey?: InputMaybe<StringFilter>;
};

export type AuditLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumActionsTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ActionsType>;
};

export type EnumActionsTypeFilter = {
  equals?: InputMaybe<ActionsType>;
  in?: InputMaybe<Array<ActionsType>>;
  not?: InputMaybe<NestedEnumActionsTypeFilter>;
  notIn?: InputMaybe<Array<ActionsType>>;
};

export type EnumActionsTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActionsTypeFilter>;
  _min?: InputMaybe<NestedEnumActionsTypeFilter>;
  equals?: InputMaybe<ActionsType>;
  in?: InputMaybe<Array<ActionsType>>;
  not?: InputMaybe<NestedEnumActionsTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ActionsType>>;
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

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuditLog: AuditLog;
  createManyAuditLog: AffectedRowsOutput;
  createManyQuestion: AffectedRowsOutput;
  createManyTest: AffectedRowsOutput;
  createQuestion: Question;
  createTest: Test;
  customCreateTest: Scalars['Boolean'];
  deleteAuditLog?: Maybe<AuditLog>;
  deleteManyAuditLog: AffectedRowsOutput;
  deleteManyQuestion: AffectedRowsOutput;
  deleteManyTest: AffectedRowsOutput;
  deleteQuestion?: Maybe<Question>;
  deleteTest?: Maybe<Test>;
  updateAuditLog?: Maybe<AuditLog>;
  updateManyAuditLog: AffectedRowsOutput;
  updateManyQuestion: AffectedRowsOutput;
  updateManyTest: AffectedRowsOutput;
  updateQuestion?: Maybe<Question>;
  updateTest?: Maybe<Test>;
  upsertAuditLog: AuditLog;
  upsertQuestion: Question;
  upsertTest: Test;
};


export type MutationCreateAuditLogArgs = {
  data: AuditLogCreateInput;
};


export type MutationCreateManyAuditLogArgs = {
  data: Array<AuditLogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTestArgs = {
  data: Array<TestCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateTestArgs = {
  data: TestCreateInput;
};


export type MutationCustomCreateTestArgs = {
  data: TestCreateInput;
};


export type MutationDeleteAuditLogArgs = {
  where: AuditLogWhereUniqueInput;
};


export type MutationDeleteManyAuditLogArgs = {
  where?: InputMaybe<AuditLogWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteManyTestArgs = {
  where?: InputMaybe<TestWhereInput>;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteTestArgs = {
  where: TestWhereUniqueInput;
};


export type MutationUpdateAuditLogArgs = {
  data: AuditLogUpdateInput;
  where: AuditLogWhereUniqueInput;
};


export type MutationUpdateManyAuditLogArgs = {
  data: AuditLogUpdateManyMutationInput;
  where?: InputMaybe<AuditLogWhereInput>;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationUpdateManyTestArgs = {
  data: TestUpdateManyMutationInput;
  where?: InputMaybe<TestWhereInput>;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateTestArgs = {
  data: TestUpdateInput;
  where: TestWhereUniqueInput;
};


export type MutationUpsertAuditLogArgs = {
  create: AuditLogCreateInput;
  update: AuditLogUpdateInput;
  where: AuditLogWhereUniqueInput;
};


export type MutationUpsertQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertTestArgs = {
  create: TestCreateInput;
  update: TestUpdateInput;
  where: TestWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumActionsTypeFilter = {
  equals?: InputMaybe<ActionsType>;
  in?: InputMaybe<Array<ActionsType>>;
  not?: InputMaybe<NestedEnumActionsTypeFilter>;
  notIn?: InputMaybe<Array<ActionsType>>;
};

export type NestedEnumActionsTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActionsTypeFilter>;
  _min?: InputMaybe<NestedEnumActionsTypeFilter>;
  equals?: InputMaybe<ActionsType>;
  in?: InputMaybe<Array<ActionsType>>;
  not?: InputMaybe<NestedEnumActionsTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ActionsType>>;
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

export type NestedJsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type NestedJsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
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
  aggregateAuditLog: AggregateAuditLog;
  aggregateQuestion: AggregateQuestion;
  aggregateTest: AggregateTest;
  auditLog?: Maybe<AuditLog>;
  auditLogs: Array<AuditLog>;
  findFirstAuditLog?: Maybe<AuditLog>;
  findFirstQuestion?: Maybe<Question>;
  findFirstTest?: Maybe<Test>;
  groupByAuditLog: Array<AuditLogGroupBy>;
  groupByQuestion: Array<QuestionGroupBy>;
  groupByTest: Array<TestGroupBy>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  test?: Maybe<Test>;
  tests: Array<Test>;
};


export type QueryAggregateAuditLogArgs = {
  cursor?: InputMaybe<AuditLogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AuditLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuditLogWhereInput>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryAggregateTestArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryAuditLogArgs = {
  where: AuditLogWhereUniqueInput;
};


export type QueryAuditLogsArgs = {
  cursor?: InputMaybe<AuditLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<AuditLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AuditLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuditLogWhereInput>;
};


export type QueryFindFirstAuditLogArgs = {
  cursor?: InputMaybe<AuditLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<AuditLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AuditLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuditLogWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindFirstTestArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<TestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryGroupByAuditLogArgs = {
  by: Array<AuditLogScalarFieldEnum>;
  having?: InputMaybe<AuditLogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AuditLogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuditLogWhereInput>;
};


export type QueryGroupByQuestionArgs = {
  by: Array<QuestionScalarFieldEnum>;
  having?: InputMaybe<QuestionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryGroupByTestArgs = {
  by: Array<TestScalarFieldEnum>;
  having?: InputMaybe<TestScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TestOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
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


export type QueryTestArgs = {
  where: TestWhereUniqueInput;
};


export type QueryTestsArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<TestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
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
  multiple: Scalars['Boolean'];
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
  multiple: Scalars['Int'];
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
  multiple?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  subTopics?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionCreateInput = {
  answer: Scalars['String'];
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  multiple?: InputMaybe<Scalars['Boolean']>;
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
  multiple?: InputMaybe<Scalars['Boolean']>;
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
  multiple: Scalars['Boolean'];
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
  multiple?: Maybe<Scalars['Boolean']>;
  topic?: Maybe<TopicType>;
};

export type QuestionMaxOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  multiple?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  answer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Boolean']>;
  topic?: Maybe<TopicType>;
};

export type QuestionMinOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  multiple?: InputMaybe<SortOrder>;
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
  multiple?: InputMaybe<SortOrder>;
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
  multiple?: InputMaybe<SortOrder>;
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
  Multiple = 'multiple',
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
  multiple?: InputMaybe<BoolWithAggregatesFilter>;
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
  multiple?: InputMaybe<BoolFieldUpdateOperationsInput>;
  options?: InputMaybe<QuestionUpdateoptionsInput>;
  subTopics?: InputMaybe<QuestionUpdatesubTopicsInput>;
  topic?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  multiple?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
  multiple?: InputMaybe<BoolFilter>;
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

export type Test = {
  __typename?: 'Test';
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['Int'];
  userKey: Scalars['String'];
};

export type TestAvgAggregate = {
  __typename?: 'TestAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TestAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TestCountAggregate = {
  __typename?: 'TestCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  data: Scalars['Int'];
  id: Scalars['Int'];
  userKey: Scalars['Int'];
};

export type TestCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type TestCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: Scalars['JSON'];
  userKey: Scalars['String'];
};

export type TestCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  userKey: Scalars['String'];
};

export type TestGroupBy = {
  __typename?: 'TestGroupBy';
  _avg?: Maybe<TestAvgAggregate>;
  _count?: Maybe<TestCountAggregate>;
  _max?: Maybe<TestMaxAggregate>;
  _min?: Maybe<TestMinAggregate>;
  _sum?: Maybe<TestSumAggregate>;
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['Int'];
  userKey: Scalars['String'];
};

export type TestMaxAggregate = {
  __typename?: 'TestMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userKey?: Maybe<Scalars['String']>;
};

export type TestMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type TestMinAggregate = {
  __typename?: 'TestMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userKey?: Maybe<Scalars['String']>;
};

export type TestMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type TestOrderByWithAggregationInput = {
  _avg?: InputMaybe<TestAvgOrderByAggregateInput>;
  _count?: InputMaybe<TestCountOrderByAggregateInput>;
  _max?: InputMaybe<TestMaxOrderByAggregateInput>;
  _min?: InputMaybe<TestMinOrderByAggregateInput>;
  _sum?: InputMaybe<TestSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export type TestOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userKey?: InputMaybe<SortOrder>;
};

export enum TestScalarFieldEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  UserKey = 'userKey'
}

export type TestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TestScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TestScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TestScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  data?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userKey?: InputMaybe<StringWithAggregatesFilter>;
};

export type TestSumAggregate = {
  __typename?: 'TestSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TestSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TestUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  userKey?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  userKey?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestWhereInput = {
  AND?: InputMaybe<Array<TestWhereInput>>;
  NOT?: InputMaybe<Array<TestWhereInput>>;
  OR?: InputMaybe<Array<TestWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  userKey?: InputMaybe<StringFilter>;
};

export type TestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum TopicType {
  Artes = 'ARTES',
  Ciencias = 'CIENCIAS',
  Geografia = 'GEOGRAFIA',
  Historia = 'HISTORIA',
  Matematica = 'MATEMATICA',
  Portugues = 'PORTUGUES'
}
