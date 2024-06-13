import AcessorioElements from "../AcessorioElement"

import Footer from "../Footer"
import Header from "../Header"
import TituloAcess from "./TituloAcessorio"

function Lancamento(){
    return(
        <>
        <Header/>
        <TituloAcess/>
        <AcessorioElements/>
        <Footer/>
        </>
    )
}
export default Lancamento