import AcessorioElements from "../AcessorioElement"

import Footer from "../Footer"
import Header from "../Header"
import ScrollToTop from "../ScrollToTop"
import TituloAcess from "./TituloAcessorio"

function Lancamento(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <TituloAcess/>
        <AcessorioElements/>
        <Footer/>
        </>
    )
}
export default Lancamento