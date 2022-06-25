import { Button } from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import { Question } from "../../../../types";
import { shuffleArray } from "../../../../utils/array/shuffle";
import { MyDoc } from "./rootDocument";
import { saveAs } from "file-saver";

interface IProps {
  questions: Question[];
  aleatory?: boolean;
}

export const PdfDownloadButton = ({ questions, aleatory }: IProps) => {
  const generatePDFOnTheFly = async () => {
    const doc = (
      <MyDoc questions={aleatory ? shuffleArray(questions) : questions} />
    );

    const asPDF = pdf();
    asPDF.updateContainer(doc);

    const blob = await asPDF.toBlob();
    saveAs(blob, "Prova.pdf");
  };

  return (
    <Button variant="text" onClick={generatePDFOnTheFly}>
      {aleatory ? "ordem aleatória" : "Salvar Prova"}
    </Button>
  );
};
