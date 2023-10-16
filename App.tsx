import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./src/hooks";
import theme from "./src/style/theme";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" translucent backgroundColor={'transparent'} />
        <Routes />
      </ThemeProvider>
    </AppProvider>
  );
}
