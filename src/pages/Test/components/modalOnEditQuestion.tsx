import { DeleteOutline, EditRounded } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { UseAuditLogContext } from "../../../context/useAuditLog";
import { Question } from "../../../types.d";
import { getCharFromIndex } from "../../../utils/text/getCharFromIndex";
import { PickQuestionForModal } from "../types";

interface IProps {
  onEdit: (idx: number, question: PickQuestionForModal) => void;
  idx: number;
  question: Question;
}

export const ModalOnEditQuestion = ({
  onEdit,
  idx,
  question: questionData,
}: IProps) => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [question, setQuestion] = useState<PickQuestionForModal>({
    answer: questionData.answer,
    description: questionData.description,
    multiple: questionData.multiple,
    options: questionData.options,
    image: questionData.image,
  });

  const onSetFormValue = (
    key: keyof Question,
    value: Question[keyof Question]
  ) => {
    if (key === "multiple") {
      if (!value) setQuestion((state) => ({ ...state, options: [] }));
    }
    setQuestion((state) => ({ ...state, [key]: value }));
  };

  const onChangeOption = (idx: number, value: string) => {
    const newOptions = question.options!.map((op, index) => {
      if (idx === index) return value;
      return op;
    });

    setQuestion((state) => ({ ...state, options: newOptions }));
  };

  const onRemoveOption = (idx: number) => {
    setQuestion((state) => ({
      ...state,
      options: state.options?.filter((_, index) => idx !== index),
    }));
  };

  const onAddOption = () => {
    setQuestion((state) => ({
      ...state,
      options: state.options?.length
        ? [...state.options, `${getCharFromIndex(state.options?.length)} - `]
        : [`${getCharFromIndex(0)} - `],
    }));
  };

  const onSave = () => {
    onEdit(idx, question);
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <Dialog
          open={modalOpen}
          onClose={onDispatchAction(
            () => setModalOpen(false),
            "CANCELAR_MODAL_EDITE_QUESTAO"
          )}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edite a questão:</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              id="description"
              label="Descrição"
              placeholder="Descrição da questão."
              multiline
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={question.description}
              onChange={(e) => onSetFormValue("description", e.target.value)}
            />

            <FormControlLabel
              label="Múltipla escolha?"
              sx={{
                marginBottom: "1rem",
              }}
              control={
                <Checkbox
                  checked={question.multiple}
                  onChange={() =>
                    onSetFormValue("multiple", !question.multiple)
                  }
                />
              }
            />

            <div>
              {question.options?.map((option, idx) => (
                <div
                  key={idx}
                  className="flex flex-row justify-between items-center"
                >
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

            {!!question.multiple && (
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
              value={question.answer}
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
              value={question.image}
              onChange={(e) => onSetFormValue("image", e.target.value)}
            />
          </DialogContent>
          <DialogActions
            sx={{
              padding: "0 1rem 0.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              onClick={onDispatchAction(
                () => setModalOpen(false),
                "CANCELAR_MODAL_EDITE_QUESTAO"
              )}
            >
              Cancelar
            </Button>
            <Button
              onClick={onDispatchAction(onSave, "SALVAR_MODAL_EDITE_QUESTAO", {
                question,
              })}
            >
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <EditRounded
        className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2"
        onClick={onDispatchAction(
          () => setModalOpen(true),
          "EDITE_QUESTAO_EDITE_PROVA",
          { idx }
        )}
      />
    </>
  );
};
