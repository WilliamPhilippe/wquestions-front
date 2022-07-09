import { useMutation } from "@apollo/client";
import { useAtomValue } from "jotai";
import { createContext } from "react";
import { userIdAtom } from "../components/UserId/userIdAtom";
import { CREATE_AUDIT_LOG } from "../data/auditLog";
import {
  MutationCreateAuditLogArgs,
  Mutation,
  ActionsType,
  Scalars,
} from "../types.d";

interface ValueProps {
  onDispatchAction: (
    callback: Function,
    action: `${ActionsType}`,
    dataOrigin?: Scalars["JSON"]
  ) => (
    param?: "OVERRIDE" | any,
    dataOverride?: Scalars["JSON"] | any
  ) => Promise<void>;
}

export const UseAuditLogContext = createContext<ValueProps>({} as ValueProps);

interface IProps {
  children: React.ReactNode;
}

export const UseAuditLogProvider = ({ children }: IProps) => {
  const currentUser = useAtomValue(userIdAtom);

  const [createAuditLog] = useMutation<
    Pick<Mutation, "createAuditLog">,
    MutationCreateAuditLogArgs
  >(CREATE_AUDIT_LOG);

  const onDispatchAction = (
    callback: Function,
    action: `${ActionsType}`,
    dataOrigin?: Scalars["JSON"]
  ) => {
    return async (
      param?: "OVERRIDE" | any,
      dataOverride?: Scalars["JSON"] | any
    ) => {
      callback(param);

      if (!currentUser) {
        return;
      }

      const { errors } = await createAuditLog({
        variables: {
          data: {
            action: action as ActionsType,
            userKey: currentUser,
            data: param === "OVERRIDE" ? dataOverride : dataOrigin ?? undefined,
          },
        },
      });

      if (errors?.length) {
        //Maybe handle it
      }
    };
  };

  return (
    <UseAuditLogContext.Provider
      value={{
        onDispatchAction,
      }}
    >
      {children}
    </UseAuditLogContext.Provider>
  );
};
