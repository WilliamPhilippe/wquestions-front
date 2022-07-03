import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UseAuditLogContext } from "../../../../context/useAuditLog";
import { Question, SubTopicsType, TopicType } from "../../../../types.d";
import { FilterSection } from "./filterSection";
import { QuestionsSection } from "./questionsSection";
import { useSearch } from "./useSearch";

export const AddQuestion = () => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [topicFilter] = useState<TopicType>(TopicType.Matematica);
  const [subtopicFilter, setSubtopicFilter] = useState<SubTopicsType[]>([]);

  const [questionList, setQuestionList] = useState<Question[]>([]);

  const { onSearch } = useSearch();

  const dispatchSearch = async () => {
    const loadingToastId = toast.loading("Buscando...");
    setLoading(true);
    try {
      const { data } = await onSearch(topicFilter, subtopicFilter);
      setQuestionList(data.questions ?? []);
    } catch {
      toast.error("Algo deu errado.");
    } finally {
      setLoading(false);
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <>
      {modalOpen && (
        <Dialog
          open={modalOpen}
          onClose={onDispatchAction(
            () => setModalOpen(false),
            "CONCLUIR_MODAL_MAIS_QUESTOES"
          )}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle
            sx={{
              borderBottom: "1px solid #eee",
            }}
          >
            Questões cadastradas:
          </DialogTitle>
          <DialogContent>
            <FilterSection
              setSubtopicFilter={setSubtopicFilter}
              subtopicFilter={subtopicFilter}
              topicFilter={topicFilter}
              dispatchSearch={dispatchSearch}
              loading={loading}
            />
            <QuestionsSection questions={questionList} />
          </DialogContent>
          <DialogActions
            sx={{
              padding: "0 1rem 0.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              borderTop: "1px solid #eee",
              paddingTop: "0.5rem",
            }}
          >
            <Button
              onClick={onDispatchAction(
                () => setModalOpen(false),
                "CONCLUIR_MODAL_MAIS_QUESTOES"
              )}
            >
              Concluir
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Button
        variant="outlined"
        sx={{ marginBottom: "1.5rem", marginTop: "0.1rem" }}
        onClick={onDispatchAction(
          () => setModalOpen(true),
          "BUSCAR_MAIS_QUESTOES_EDITE_PROVA"
        )}
      >
        Buscar mais questões
      </Button>
    </>
  );
};
