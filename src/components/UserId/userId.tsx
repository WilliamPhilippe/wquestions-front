import { useQuery } from "@apollo/client";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GET_TESTS_QUERY } from "../../data/test";
import { Query, QueryTestsArgs, Test } from "../../types.d";
import { ModalUserId } from "./modalUserId";
import { userIdAtom } from "./userIdAtom";

const userIdKey = "USER_ID_STORE";

export const UserId = () => {
  const [userIdValue, setUserIdValue] = useAtom(userIdAtom);
  const [tests, setTests] = useState<Test[]>([]);

  const { data, loading, error } = useQuery<
    Pick<Query, "tests">,
    Pick<QueryTestsArgs, "where">
  >(GET_TESTS_QUERY, {
    variables: {
      where: {
        userKey: { equals: userIdValue || "-%" },
      },
    },
  });

  useEffect(() => {
    const userIdStored = localStorage.getItem(userIdKey);
    if (userIdStored) {
      setUserIdValue(userIdStored);
    } else {
      const newUserIdGenerated = generateNewUserId();
      localStorage.setItem(userIdKey, newUserIdGenerated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateNewUserId = () => {
    const newUserId = `USER${Math.floor((Math.random() + 1) * 100000)}`;

    toast.success("Seu usuário foi gerado com sucesso! - " + newUserId);

    setUserIdValue(newUserId);

    return newUserId;
  };

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
        {data?.tests?.length ? (
          <div />
        ) : (
          <h4 className="text-center text-gray-500 mt-3 text-sm mb-2">
            Você não tem provas salvas
          </h4>
        )}
      </div>
    </>
  );
};
