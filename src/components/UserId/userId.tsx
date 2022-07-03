import { useQuery } from "@apollo/client";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { GET_TESTS_QUERY } from "../../data/test";
import { Query, QueryTestsArgs } from "../../types.d";
import { userIdKey } from "../../utils/consts";
import { ModalUserId } from "./modalUserId";
import { TestLI } from "./testLI";
import { userIdAtom } from "./userIdAtom";

export const UserId = () => {
  const [userIdValue, setUserIdValue] = useAtom(userIdAtom);

  const { data } = useQuery<
    Pick<Query, "tests">,
    Pick<QueryTestsArgs, "where">
  >(GET_TESTS_QUERY, {
    variables: {
      where: {
        userKey: { equals: userIdValue || "-%" },
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const onSaveUser = (user: string) => {
    setUserIdValue(user);
    localStorage.setItem(userIdKey, user);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="py-1 px-2 border-2 border-dashed rounded">
          <h3 className="font-semibold text-3xl">{userIdValue}</h3>
        </div>
        <p className="text-sm mt-3 text-gray-600 text-justify">
          Este é seu usuário salvo neste navegador, que será associado às provas
          que você salvar. Caso queira vê-las no futuro, basta buscar utilizando
          este usuário. Se você já possui um usuário, basta clicar no botão de
          Outro Usuário para que possamos carregar as provas associadas à sua
          conta.
        </p>
        <div className="w-full flex flex-row justify-end items-end mt-2">
          <ModalUserId onSaveUser={onSaveUser} />
        </div>
      </div>
      <Divider sx={{ marginBottom: "1rem", marginTop: "1rem" }} />
      <div>
        <p>Suas provas:</p>

        {!data?.tests.length && (
          <h4 className="text-center text-gray-500 mt-3 text-sm mb-2">
            Você não tem provas salvas
          </h4>
        )}

        <div className="ml-2 w-full flex flex-row items-start justify-start flex-wrap place-content-start content-start">
          {data?.tests.map((test) => (
            <TestLI test={test} key={test.id} />
          ))}
        </div>
      </div>
    </>
  );
};
