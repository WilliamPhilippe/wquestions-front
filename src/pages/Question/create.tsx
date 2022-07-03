import { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { DeleteOutline } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CREATE_QUESTION_MUTATION } from "../../data/question";
import {
  MutationCreateQuestionArgs,
  Question,
  SubTopicsType,
  TopicType,
} from "../../types.d";
import { getCharFromIndex } from "../../utils/text/getCharFromIndex";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { TitleBlue } from "../../components/Text/titles";
import { getSubTopicWord } from "../../utils/text/mapSubTopics";
import { UseAuditLogContext } from "../../context/useAuditLog";

export const CreateQuestion = () => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<Partial<Question>>({
    topic: TopicType.Matematica,
    options: [],
    answer: "",
    image: "",
    level: 1,
    subTopics: [],
    description: "",
    multiple: false,
  });

  const onSetFormValue = (
    id: keyof Question,
    value: Question[keyof Question]
  ) => {
    if (id === "multiple") {
      if (!value) setFormValues((state) => ({ ...state, options: [] }));
    }
    setFormValues((state) => ({ ...state, [id]: value }));
  };

  const onChangeOption = (idx: number, value: string) => {
    const newOptions = formValues.options!.map((op, index) => {
      if (idx === index) return value;
      return op;
    });

    setFormValues((state) => ({ ...state, options: newOptions }));
  };

  const onRemoveOption = (idx: number) => {
    setFormValues((state) => ({
      ...state,
      options: state.options?.filter((_, index) => idx !== index),
    }));
  };

  const onAddOption = () => {
    setFormValues((state) => ({
      ...state,
      options: state.options?.length
        ? [...state.options, `${getCharFromIndex(state.options?.length)} - `]
        : [`${getCharFromIndex(0)} - `],
    }));
  };

  const [createQuestion] = useMutation<
    { createQuestion: Question },
    MutationCreateQuestionArgs
  >(CREATE_QUESTION_MUTATION, {});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      answer,
      description,
      image,
      level,
      multiple,
      options,
      subTopics,
      topic,
    } = formValues;

    if (!answer || !description || !level || !topic) {
      toast.error("Verifique os dados, não foi possível criar a questão.");
      return;
    }

    const toastLoadingId = toast.loading("Salvando questão...");

    try {
      setLoading(true);

      await createQuestion({
        variables: {
          data: {
            description: description,
            answer: answer,
            level: level,
            topic: topic,
            image: image,
            multiple: multiple,
            options: { set: options ?? [] },
            subTopics: { set: subTopics ?? [] },
          },
        },
      });

      toast.dismiss(toastLoadingId);
      toast.success("Questão criada!");

      onReset();
    } catch {
      toast.error("Erro ao criar a questão, verifique os dados!");
    } finally {
      toast.dismiss(toastLoadingId);
      setLoading(false);
    }
  };

  const onReset = (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    setFormValues({
      topic: TopicType.Matematica,
      options: [],
      answer: "",
      image: "",
      level: 1,
      subTopics: [],
      description: "",
      multiple: false,
    });
  };

  return (
    <CenteredContainer>
      <TitleBlue>Criar questão:</TitleBlue>
      <form
        onSubmit={onDispatchAction(
          (e: any) => onSubmit(e),
          "SALVAR_CRIAR_QUESTAO_FORM",
          { formValues }
        )}
        onReset={onDispatchAction(onReset, "LIMPAR_CRIAR_QUESTAO_FORM")}
      >
        <TextField
          sx={{ marginBottom: "1rem" }}
          id="description"
          label="Descrição"
          placeholder="Descrição da questão"
          multiline
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formValues.description}
          onChange={(e) => onSetFormValue("description", e.target.value)}
        />

        <FormControlLabel
          label="Múltipla escolha?"
          sx={{
            marginBottom: "1rem",
          }}
          control={
            <Checkbox
              checked={formValues.multiple}
              onChange={() => onSetFormValue("multiple", !formValues.multiple)}
            />
          }
        />

        <div>
          {formValues.options?.map((option, idx) => (
            <div className="flex flex-row justify-between items-center">
              <TextField
                sx={{ marginBottom: "0.5rem" }}
                id={"option " + getCharFromIndex(idx)}
                label={"Opção " + getCharFromIndex(idx)}
                multiline
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={option}
                onChange={(e) =>
                  onChangeOption(
                    idx,
                    e.target.value.startsWith(getCharFromIndex(idx) + " - ")
                      ? e.target.value
                      : getCharFromIndex(idx) + " - "
                  )
                }
              />
              <DeleteOutline
                sx={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => onRemoveOption(idx)}
              />
            </div>
          ))}
        </div>

        {!!formValues.multiple && (
          <>
            <Button
              type="button"
              sx={{ marginBottom: "1rem" }}
              variant="outlined"
              onClick={onAddOption}
            >
              Adicionar alternativa
            </Button>
            <Divider sx={{ marginBottom: "1rem" }} />
          </>
        )}

        <TextField
          sx={{ marginBottom: "1rem" }}
          id="anwser"
          label="Resposta"
          placeholder="Ex: A, Brasil, 5.14..."
          multiline
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          value={formValues.answer}
          onChange={(e) => onSetFormValue("answer", e.target.value)}
        />

        <Divider sx={{ marginBottom: "1rem" }} />

        <TextField
          sx={{ marginBottom: "1rem" }}
          id="image"
          label="Imagem"
          placeholder="Insira a URL/link da imagem: Ex: https://imagem.com"
          multiline
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formValues.image}
          onChange={(e) => onSetFormValue("image", e.target.value)}
        />

        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel id="topic-label">Matéria</InputLabel>
          <Select
            labelId="topic-label"
            id="topic"
            value={formValues.topic}
            label="Matéria"
          >
            <MenuItem value={TopicType.Matematica}>Matemática</MenuItem>
          </Select>
        </FormControl>

        <Autocomplete
          fullWidth
          id="subTopics"
          multiple
          options={Object.values(SubTopicsType)}
          getOptionLabel={(op) => getSubTopicWord(op)}
          onChange={(_, value) => onSetFormValue("subTopics", value)}
          value={formValues.subTopics}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              label="Assuntos"
              sx={{ marginBottom: "1rem" }}
              InputLabelProps={{ shrink: true }}
              placeholder="Escolha os assuntos"
            />
          )}
        />

        <TextField
          type="number"
          sx={{ marginBottom: "1rem" }}
          id="level"
          label="Dificuldade (1-10)"
          placeholder="Fácil: 1, Difícil: 10"
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          value={formValues.level}
          onChange={(e) => {
            let value = Number(e.target.value);
            if (!value && value !== 0)
              return onSetFormValue("level", e.target.value);
            if (value > 10) value = 10;
            else if (value < 1) value = 1;
            onSetFormValue("level", value);
          }}
        />

        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start">
            <Button
              disableElevation
              variant="text"
              color="inherit"
              disabled={loading}
              onClick={onDispatchAction(
                () => navigate(-1),
                "VOLTAR_CRIAR_QUESTAO_FORM"
              )}
            >
              Voltar
            </Button>
            <Button
              disableElevation
              variant="text"
              type="reset"
              color="inherit"
              disabled={loading}
            >
              Limpar
            </Button>
          </div>
          <Button disabled={loading} disableElevation type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </CenteredContainer>
  );
};
