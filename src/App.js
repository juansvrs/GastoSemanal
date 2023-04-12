import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Gasto } from "./components/Gasto";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/gastos" element={<Gasto/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
