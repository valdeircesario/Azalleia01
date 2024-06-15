import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PAGINAS/PaginaInicial";
import Catalago from "./PAGINAS/Catalago";
import Lancamentos from "./PAGINAS/Lancament";
import Promoções from "./PAGINAS/Promoçoes";
import Acessorios from "./PAGINAS/Acessorios";

import Conjuntos from "./PAGINAS/Conjuntos";
import Macaquinho from "./PAGINAS/Macaquinhos";
import Shorts from "./PAGINAS/Shorts";
import Vestidos from "./PAGINAS/Vestidos";
import Contatos from "./PAGINAS/Contatos";
import QuemSou from "./QuemSou";




function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/src/PAGINAS/Catalago.jsx" element={<Catalago/>}/>
        <Route path="/src/PAGINAS/Contatos.jsx" element={<Contatos/>}/>
        <Route path="/src/PAGINAS/Lancament.jsx" element={<Lancamentos/>}/>
        <Route path="/src/PAGINAS/Promoçoes.jsx" element={<Promoções/>}/>
        <Route path="/src/PAGINAS/Acessorios.jsx" element={<Acessorios/>}/>
        <Route path="/src/PAGINAS/Conjuntos.jsx" element={<Conjuntos/>}/>
        <Route path="/src/PAGINAS/Macaquinhos.jsx" element={<Macaquinho/>}/>
        <Route path="/src/PAGINAS/Shorts.jsx" element={<Shorts/>}/>
        <Route path="/src/PAGINAS/Vestidos.jsx" element={<Vestidos/>}/>
        <Route path="/src/QuemSou.jsx" element={<QuemSou/>}/>

    
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
