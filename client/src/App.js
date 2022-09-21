import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        {/* <Route path="/" element={""} /> */}
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
