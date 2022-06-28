import { SubTopicsType } from "../../types.d";
import { formatEnum } from "./formatInput";

export const getSubTopicWord = (key: string) => {
  const values: { [key: string]: string } = {
    [SubTopicsType.Algebra]: "Álgebra",
    [SubTopicsType.Angulos]: "Ângulos",
    [SubTopicsType.Areas]: "Áreas",
    [SubTopicsType.Comprimento]: "Comprimento",
    [SubTopicsType.Congruencia]: "Congruência",
    [SubTopicsType.Conversao]: "Conversão",
    [SubTopicsType.Divisao]: "Divisão",
    [SubTopicsType.Estatistica]: "Estatística",
    [SubTopicsType.EventosAleatorios]: "Eventos Aleatórios",
    [SubTopicsType.Formas]: "Formas",
    [SubTopicsType.Fracoes]: "Frações",
    [SubTopicsType.Geometria]: "Geometria",
    [SubTopicsType.Graficos]: "Gráficos",
    [SubTopicsType.GrandezasEMedidas]: "Grandezas e Medidas",
    [SubTopicsType.Localizacao]: "Localização",
    [SubTopicsType.MassaVolume]: "Massa e Volume",
    [SubTopicsType.Multiplicacao]: "Multiplicação",
    [SubTopicsType.NumerosDecimais]: "Números Decimais",
    [SubTopicsType.OperacoesComFracoes]: "Operações com Frações",
    [SubTopicsType.Perimetro]: "Perímetro",
    [SubTopicsType.Pesquisas]: "Pesquisas",
    [SubTopicsType.Porcentagem]: "Porcentagem",
    [SubTopicsType.Probabilidade]: "Probabilidade",
    [SubTopicsType.Proporcionalidade]: "Proporcionalidade",
    [SubTopicsType.Proporcoes]: "Proporções",
    [SubTopicsType.Razoes]: "Razões",
    [SubTopicsType.Soma]: "Soma",
    [SubTopicsType.Subtracao]: "Subtração",
    [SubTopicsType.Tempo]: "Tempo",
    [SubTopicsType.Triangulos]: "Triângulos",
  };

  return values[key] ?? formatEnum(key);
};
