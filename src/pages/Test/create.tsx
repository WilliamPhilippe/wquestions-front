import { useState } from "react";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CenteredContainer } from "../../components/Containers/centeredContainer";
import { TitleBlue } from "../../components/Text/titles";
import { SubTopicsType, TopicType } from "../../types.d";
import { TestType } from "./types.d";
import { formatEnum } from "../../utils/text/formatInput";

export const CreateTest = () => {
  const [formValues, setFormValues] = useState<TestType>({
    topic: TopicType.Matematica,
  });

  const onSetFormValue = (
    id: keyof TestType,
    value: TestType[keyof TestType]
  ) => {
    setFormValues((state) => ({ ...state, [id]: value }));
  };

  return (
    <CenteredContainer>
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
        getOptionLabel={(op) => formatEnum(op)}
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
    </CenteredContainer>
  );
};
