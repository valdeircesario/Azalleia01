import TituloCatalago from "../CatalagoTitulo"
import ContactForm from "../Contatcform"
import Footer from "../Footer"
import Header from "../Header"
import ScrollToTop from "../ScrollToTop"

import Vitrine from "../Vitrine"




function CatalagoPrincipal(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        
        <TituloCatalago/>
        
        <Vitrine/>
        <hr />
        <ContactForm/>
        <Footer/>
        
        


        </>
        
    )
}

export default CatalagoPrincipal