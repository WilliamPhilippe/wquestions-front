import { Router } from "./routes/routes";

import "./App.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
