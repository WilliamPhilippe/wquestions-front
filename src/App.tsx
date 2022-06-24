import { Router } from "./routes/routes";

import "./App.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";
import { Document, Page, Text, PDFViewer, Image } from "@react-pdf/renderer";

// const MyDocument = () => {
//   return (
//     <Document>
//       <Page>
//         <Text>Image test</Text>
//         <Text>Mais um</Text>
//         <Image src="https://storage.googleapis.com/cbb_logos/conf_logos/conf-1-logo.png" />
//       </Page>
//     </Document>
//   );
// };

// const App = () => (
//   <div>
//     <PDFViewer>
//       <MyDocument />
//     </PDFViewer>
//   </div>
// );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
