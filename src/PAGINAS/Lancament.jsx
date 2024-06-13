import ContactForm from "../Contatcform"
import Footer from "../Footer"
import Header from "../Header"
import TituloNovidades from "./TituloNovidades"
import Novidades from "./Novas"





function Lancamentos(){
    return(
        <>
        
        <Header/>
        <TituloNovidades/>
        <Novidades/>
        <hr />
        <ContactForm/>
        
        
        <Footer/>
        </>
        
    )
}
export default Lancamentos