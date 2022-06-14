import { Router } from "./routes/routes";

import "./App.css";
import { Wrapper } from "./components/Wrapper";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router />
        <Toaster />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
