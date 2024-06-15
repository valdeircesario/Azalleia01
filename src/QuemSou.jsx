
import Footer from './Footer'
import Header from './Header'
import './QuemSou.css'
import ScrollToTop from './ScrollToTop'

function QuemSou(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <div className="quemsou">
            <h1>Bem-vinda à Azalleia</h1>
            <div className="sou1">
                
                <h6>Azalleia A Moda Feminina</h6>
                <p>Fundada em março de 2024, a Azalleia nasceu com a missão de proporcionar elegância e um estilo de vida mais confortável e atraente para mulheres que buscam inovação e qualidade. Nossa loja online oferece uma moda totalmente alinhada aos seus gostos e ao seu conforto, sempre buscando trazer elegância e satisfação para você.</p>

                <p>Na Azalleia, você encontrará uma ampla variedade de roupas e acessórios femininos, incluindo vestidos deslumbrantes, conjuntos modernos, blusas encantadoras, croptops estilosos e uma seleção incrível de brincos, colares e pulseiras. Cada peça é cuidadosamente selecionada para atender aos gostos das mulheres modernas, com detalhes bem feitos e acabamentos de primeira qualidade.</p>
                <p>Acreditamos que cada mulher é única e nossa equipe trabalha incansavelmente para oferecer produtos que reflitam essa individualidade. O seu conforto e satisfação são nossas prioridades, e nossa equipe está sempre pronta para atendê-la com excelência, garantindo um atendimento de primeira classe e a segurança em todas as etapas da compra.</p>
                <p>A Azalleia chegou para tornar cada mulher ainda mais linda e confiante. Não deixe de conferir nosso catálogo incrível, repleto de opções que vão encantar você. Estamos ansiosos para recebê-la em nosso site e proporcionar uma experiência única de moda, conforto e segurança.</p>
                 
            </div>
            
        </div>
        <Footer/>
        </>
        

    )
}
export default QuemSou