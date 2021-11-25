import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./assets/css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CountryScreen from "./screens/CountryScreen";
import CountriesScreen from "./screens/CountriesScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="country" element={<CountryScreen />}></Route>
          <Route path="countries" element={<CountriesScreen />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
