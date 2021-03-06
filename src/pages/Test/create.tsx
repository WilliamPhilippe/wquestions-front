import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { TitleBlue } from "../../components/Text/titles";
import { SubTopicsType, TopicType } from "../../types.d";
import { TestType } from "./types.d";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";
import { useAtom } from "jotai";
import { paramsForNewTest } from "./atoms/useAtoms";
import { getSubTopicWord } from "../../utils/text/mapSubTopics";
import { useContext } from "react";
import { UseAuditLogContext } from "../../context/useAuditLog";

export const CreateTest = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useAtom(paramsForNewTest);

  const { onDispatchAction } = useContext(UseAuditLogContext);

  const onSetFormValue = (
    id: keyof TestType,
    value: TestType[keyof TestType]
  ) => {
    setFormValues((state) => ({ ...state, [id]: value }));
  };

  const onReset = (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();

    setFormValues({
      topic: TopicType.Matematica,
      level: 5,
      questionQuantity: 1,
      subTopics: [],
      topicLogic: "OR",
    });
  };

  const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();

    if (!formValues.subTopics?.length) {
      return toast.error("Você precisa selecionar os assuntos.");
    }

    if (!formValues.topic) {
      return toast.error("Você precisa selecionar a matéria.");
    }

    if (!formValues.level) {
      return toast.error("Você precisa selecionar a dificuldade.");
    }

    if (!formValues.questionQuantity) {
      return toast.error("Você precisa selecionar a quantidade de questões.");
    }

    toast.success("Prova criada!");
    navigate(ROUTES.test.edit);
  };

  return (
    <CenteredContainer>
      <form
        onSubmit={onDispatchAction(onSubmit, "CRIAR_CRIAR_PROVA_FORM", {
          formValues,
        })}
        onReset={onDispatchAction(onReset, "LIMPAR_CRIAR_PROVA_FORM")}
      >
        <div className="flex flex-col w-full items-center">
          <TitleBlue>Criar teste:</TitleBlue>
        </div>

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

        <FormControlLabel
          label={
            <span className="text-sm">
              Cada questão deve ter TODOS os assuntos selecionados?
            </span>
          }
          sx={{
            marginBottom: "1rem",
            marginTop: -2,
          }}
          control={
            <Checkbox
              checked={formValues.topicLogic === "AND"}
              onChange={() =>
                onSetFormValue(
                  "topicLogic",
                  formValues.topicLogic === "OR" ? "AND" : "OR"
                )
              }
            />
          }
        />

        <div className="flex flex-row justify-between item-center">
          <TextField
            type="number"
            sx={{ marginBottom: "1rem", marginRight: "0.5rem" }}
            id="questionQuantity"
            label="Número de questões - Max: 10"
            placeholder="Máximo 10 questões"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            value={formValues.questionQuantity}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (!value && value !== 0)
                return onSetFormValue("questionQuantity", 1);
              if (value > 10) value = 10;
              else if (value < 1) value = 1;
              onSetFormValue("questionQuantity", value);
            }}
          />

          <TextField
            type="number"
            sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
            id="level"
            label="Dificuldade (1-10)"
            placeholder="(1-10)"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            value={formValues.level}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (!value && value !== 0) return onSetFormValue("level", 1);
              if (value > 10) value = 10;
              else if (value < 1) value = 1;
              onSetFormValue("level", value);
            }}
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start">
            <Button
              disableElevation
              variant="text"
              color="inherit"
              onClick={onDispatchAction(
                () => navigate(ROUTES.home),
                "VOLTAR_CRIAR_PROVA_FORM"
              )}
            >
              Voltar
            </Button>
            <Button
              disableElevation
              variant="text"
              type="reset"
              color="inherit"
            >
              Limpar
            </Button>
          </div>
          <Button
            disableElevation
            type="submit"
            disabled={formValues.subTopics.length === 0}
          >
            Criar
          </Button>
        </div>
      </form>
    </CenteredContainer>
  );
};
