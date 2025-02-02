import Generic_card from '../../components/Generic-card/Generic-card';
import Header from '../../components/Header/Header';
import IMG from '../../imgs/imgs';
import './Home.css';
import carros from '../../data/FakeData'
import whats from '../../assets/whats.svg'
import phone from '../../assets/phone.svg'
import Footer from '../../components/Footer/Footer';
import { NavLink } from "react-router";
export default function home() {
    const meca_test = [IMG.meca_test, IMG.meca_teste2]
    const volvo_test = [IMG.img_volvo]
    const car_highlight = carros.filter(car => car.highlight_car === true);
    return (
        <>
            <Header />
            <div className="first-section">
                <div className="container-first-second-section">
                    <img src={IMG.bmw_img} alt="BMW" className="img-bmw-cell" />
                    <h1 className="title">
                        Carros de Luxo. Exclusividade em Cada Detalhe.
                    </h1>
                    <p className="description">
                        Explore nossa seleção de carros de luxo,
                        cuidadosamente escolhidos para oferecer o
                        melhor desempenho, conforto e design.
                    </p>
                    <NavLink to="/estoque" end className="button">
                        Explore Nosso Estoque
                    </NavLink>
                    <img src={IMG.bmw_img} alt="BMW" className="img-bmw" />
                </div>
            </div>
            <div className="second-section">
                <div className="container-first-second-section">
                    <img src={IMG.meca_img} alt="MECA" className="img-meca-cell" />
                    <img src={IMG.meca_img} alt="MECA" className="img-meca" />
                    <h1 className="title second-section-title">
                        Modelos Icônicos. Desempenho Incomparável.
                    </h1>
                    <p className="description second-section-description">
                        Na Hendeny, cada veículo é selecionado para
                        atender aos mais altos padrões de luxo,
                        tecnologia e performance.
                        Descubra uma nova dimensão de dirigir.
                    </p>
                </div>
            </div>
            <div className="third-section">
                <div className="highlight">
                    <h1 className="highlight-title">
                        Veículos em Destaques
                    </h1>
                    <p className="highlight-description">
                        Conheça nossos modelos mais recentes e exclusivos.
                    </p>
                </div>
                <div className="cards">
                    {car_highlight.map((carro, index) => (
                        <Generic_card key={carro.id} id={carro.id} model={carro.model} imgs={carro.imgs} mark={carro.mark} price={carro.price} bodywork={carro.bodywork} traction={carro.traction} year={carro.year} kilometers={carro.kilometers} />

                    ))}
                </div>
                <div className="third-section-button">
                    <NavLink to="/estoque" end className="button">
                        Explore Nosso Estoque
                    </NavLink>
                </div>
            </div>
            <div className="fourth-section">
                <div className="container-fourth-section">
                    <div className="left-side-fourth-section">
                        <h1 className="title-fourth-section">
                            Por Que Escolher a Hendeny?
                            <div className="description-fourth-section">
                                <ul>
                                    <li>
                                        <p >Exclusividade </p>Apenas os melhores modelos de marcas premium.
                                    </li>
                                    <li>
                                        <p> Qualidade Garantida</p> Veículos inspecionados e certificados.
                                    </li>
                                    <li>
                                        <p> Atendimento VIP</p> Consultores disponíveis para ajudar em cada etapa.
                                    </li>
                                    <li>
                                        <p> Financiamento Personalizado</p> Planos exclusivos para você.
                                    </li>
                                </ul>
                            </div>
                        </h1>
                    </div>
                    <div className="right-side-fourth-section">
                        <h6 className="title-fourth-section second-title-fourth-section">
                            Agende Sua Visita e Conheça Mais
                        </h6>
                        <p className="second-description-fourth-section">
                            Venha conhecer nossa seleção de veículos pessoalmente. Oferecemos uma experiência única para você descobrir o carro dos seus sonhos.
                        </p>
                        <div className="cell-phone">
                            <img src={whats} alt="WHATSAPP" className='whatsapp-icon' />
                            <p>(44) 0 0000-0000</p>
                        </div>
                        <div className="cell-phone">
                            <img src={whats} alt="WHATSAPP" className='whatsapp-icon' />
                            <p>(44) 0 0000-0000</p>
                        </div>
                        <div className="address">
                            <h1>Endereço</h1>
                            <h1 className="street">
                                Rod. Heitor de Alencar Furtado
                            </h1>
                            <h1 className="city">
                                Paranavaí
                            </h1>
                            <h1 className="state">
                                Paraná
                            </h1>
                        </div>
                        <a href="http://wa.me/5544000000000" className="contact">
                            <img src={phone} alt="" className='img-contact' />
                            <h1 className='text-contact'>Marcar Uma Visita</h1>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}