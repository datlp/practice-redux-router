import * as React from "react";
import AppBar from "./views/@Appbar";
// make a them dark

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// use store
import { Provider as StoreProvider } from "react-redux";
import { configureStore } from "./store";

// use routers
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// use views
import Homepage from "./views/Homepage";
import Movies from "./views/Movies";
import Actresses from "views/Actresses";
import Genres from "views/Genres";

export default function App() {
  const store = configureStore();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <StoreProvider store={store}>
        <BrowserRouter>
          <AppBar></AppBar>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movie/:ID" element={<Movies />}></Route>
            <Route path="/actresses" element={<Actresses />}></Route>
            <Route path="/actress/:ID" element={<Actresses />}></Route>
            <Route path="/genres" element={<Genres />}></Route>
            <Route path="/genre/:ID" element={<Genres />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
}
