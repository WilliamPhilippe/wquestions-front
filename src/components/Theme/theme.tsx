import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 1.7,
          paddingTop: 5,
          paddingBottom: 3,
        },
      },
    },
  },
});
