import { Router } from "./routes/routes";

import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";
import { UseAuditLogContext } from "./context/useAuditLog";
import { useContext, useEffect } from "react";
import { useAtom } from "jotai";
import { userIdAtom } from "./components/UserId/userIdAtom";
import { userIdKey } from "./utils/consts";

function App() {
  const { onDispatchAction } = useContext(UseAuditLogContext);
  const [userId, setUserIdValue] = useAtom(userIdAtom);

  useEffect(() => {
    if (userId) {
      onDispatchAction(() => {}, "ENTRAR_NO_SISTEMA_HOME", {
        newUser: userId,
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
