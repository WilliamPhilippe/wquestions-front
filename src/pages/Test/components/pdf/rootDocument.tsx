import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useEffect } from "react";
import { Question } from "../../../../types";
import { formatSetence } from "../../../../utils/text/formatInput";

interface IProps {
  questions: Question[];
  withAnswers?: boolean;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: "10px 10px",
  },
  view: {
    marginBottom: 10,
    borderBottom: " solid #b5b5b5",
    paddingBottom: 100,
  },
  description: {
    fontSize: 10,
    marginBottom: 10,
  },
  options: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
  },
  header: {
    border: "1px solid #797979",
    padding: "8px 3px 3px",
    marginBottom: 15,
  },
  subHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nota: {
    fontSize: 10,
    marginBottom: 10,
    marginRight: 50,
  },
  image: {
    maxWidth: 250,
  },
});

const QuestionView = ({
  question,
  position,
  withAnswers,
}: {
  question: Question;
  position: number;
  withAnswers?: boolean;
}) => {
  return (
    <View style={styles.view} wrap={false}>
      <Text style={styles.description}>
        {position + ") "}
        {formatSetence(question.description)}
      </Text>
      {question.image && <Image src={question.image} style={styles.image} />}
      {question.multiple &&
        question.options.map((op) => (
          <Text key={op} style={styles.options}>
            {op}
          </Text>
        ))}
      {!!withAnswers && (
        <Text style={styles.description}>Resposta: {question.answer}</Text>
      )}
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Text style={styles.description}>Aluno:</Text>
        <Text style={styles.nota}>Nota:</Text>
      </View>
      <Text style={styles.description}>Data:</Text>
    </View>
  );
};
export const MyDoc = ({ questions, withAnswers }: IProps) => {
  useEffect(() => {
    console.info("inside", questions);
  }, [questions]);

  return questions.length ? (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header></Header>
        {questions.map((q, idx) => (
          <QuestionView
            key={q.id}
            question={q}
            position={idx + 1}
            withAnswers={withAnswers}
          />
        ))}
      </Page>
    </Document>
  ) : (
    <Document />
  );
};
