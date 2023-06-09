import React, { useContext } from "react";
import Dashboard from "./container/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/Global";
import { lightTheme, darkTheme } from "./style/Theme";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
