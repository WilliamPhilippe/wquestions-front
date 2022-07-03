import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { SubTitleBlack } from "../../../../components/Text/titles";
import { UseAuditLogContext } from "../../../../context/useAuditLog";
import { SubTopicsType, TopicType } from "../../../../types.d";
import { formatEnum } from "../../../../utils/text/formatInput";

interface IProps {
  topicFilter: TopicType;
  subtopicFilter: SubTopicsType[];
  setSubtopicFilter: React.Dispatch<React.SetStateAction<SubTopicsType[]>>;
  dispatchSearch: () => Promise<void>;
  loading: boolean;
}

export const FilterSection = ({
  setSubtopicFilter,
  subtopicFilter,
  topicFilter,
  dispatchSearch,
  loading,
}: IProps) => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  return (
    <div>
      <SubTitleBlack>Filtros:</SubTitleBlack>

      <div className="flex flex-row mt-3 space-x-2">
        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel id="topic-label">Matéria</InputLabel>
          <Select
            labelId="topic-label"
            id="topic"
            value={topicFilter}
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
          onChange={(_, value) => setSubtopicFilter(value)}
          value={subtopicFilter}
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
      </div>
      <div className="flex justify-end">
        <Button
          disabled={subtopicFilter.length === 0 || loading}
          onClick={onDispatchAction(
            dispatchSearch,
            "BUSCAR_MODAL_MAIS_QUESTOES"
          )}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};
