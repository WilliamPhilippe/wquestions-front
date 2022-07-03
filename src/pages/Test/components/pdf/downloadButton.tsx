import { Button } from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import { Question } from "../../../../types";
import { shuffleArray } from "../../../../utils/array/shuffle";
import { MyDoc } from "./rootDocument";
import { saveAs } from "file-saver";
import { useContext } from "react";
import { UseAuditLogContext } from "../../../../context/useAuditLog";

interface IProps {
  questions: Question[];
  aleatory?: boolean;
  withAnswers?: boolean;
}

export const PdfDownloadButton = ({
  questions,
  aleatory,
  withAnswers,
}: IProps) => {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const generatePDFOnTheFly = async () => {
    if (!questions.length) return;
    const doc = (
      <MyDoc
        questions={aleatory ? shuffleArray(questions) : questions}
        withAnswers={withAnswers}
      />
    );

    const asPDF = pdf();
    asPDF.updateContainer(doc);

    const blob = await asPDF.toBlob();
    saveAs(blob, withAnswers ? "Gabarito.pdf" : "Prova.pdf");
    onDispatchAction(
      () => {},
      withAnswers
        ? "GABARITO_EDITE_PROVA"
        : aleatory
        ? "BAIXAR_EM_ORDEM_ALEATORIOA_EDITE_PROVA"
        : "BAIXAR_PROVA_EDITE_PROVA",
      { questions }
    )();
  };

  return (
    <Button
      variant="text"
      onClick={generatePDFOnTheFly}
      disabled={!questions.length}
    >
      {withAnswers
        ? "Gabarito"
        : aleatory
        ? "baixar em ordem aleatória"
        : "baixar Prova"}
    </Button>
  );
};
