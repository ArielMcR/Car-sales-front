import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { NavLink, useParams } from "react-router";
import carros from "../../data/FakeData"
import Slider from "react-slick";
import './Car-detail.css';
import IMG from "../../imgs/imgs";
import { useState } from "react";
import GenericInput from "../../components/Generic-Input/Generic-input";
import Generic_card from "../../components/Generic-card/Generic-card";
import leftArrow from "../../assets/left-arrow.svg";
export default function CarDetail() {
    const { id } = useParams();
    const fake_car = carros.filter(car => car.id == id);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [cellphone, setCellphone] = useState()
    const [message, setMessage] = useState(`Olá, gostaria de saber se o veículo ${fake_car[0].model} na cor ${fake_car[0].color} continua disponível ?`)
    const ViewportHeight = window.innerHeight;
    const settings = {
        infinite: fake_car[0].imgs.length >= 2 ? true : false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const settings_mobile = {
        infinite: fake_car[0].imgs.length >= 2 ? true : false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const settings_others_cars = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: ViewportHeight <= 800 ? false : true,
        dots: ViewportHeight <= 800 ? true : false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    return (
        <>
            < Header />
            {ViewportHeight > 800 ? (
                <div className="content">
                    <NavLink to="/estoque" className="back-to-stock">
                        <img src={leftArrow} alt="Voltar" />
                        <p>Voltar para o estoque</p>
                    </NavLink>
                    <div className="container-car-detail">
                        <div className="spacing-imgs">
                            <Slider {...settings}>
                                {fake_car[0].imgs.map((url, index) => (
                                    <div key={index}>
                                        <img
                                            src={`data:image/jpeg;base64,${url}`}
                                            alt={`Slide ${index + 1}`}
                                            className="car-detail-img"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="car-detail-info">
                            <div className="left-side-car-detail">
                                <section>
                                    <div className="title-with-highlight">
                                        <h1 className="car-title">
                                            {fake_car[0].mark} <span className="title-color">{fake_car[0].model}</span>

                                        </h1>
                                        {
                                            fake_car[0].highlight_car && (
                                                <span className="highlight-button">
                                                    <h3>
                                                        Em destaque
                                                    </h3>
                                                </span>
                                            )
                                        }
                                    </div>
                                    <h3 className="car-description">
                                        {fake_car[0].motor + ' ' + fake_car[0].traction + ' ' + fake_car[0].fuel}
                                    </h3>
                                </section>
                                <section>
                                    <div className="car-details-info-2">
                                        <div>
                                            <h1>Ano</h1>
                                            <p>
                                                {fake_car[0].year}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Kilometros</h1>
                                            <p>
                                                {fake_car[0].kilometers}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Câmbio</h1>
                                            <p>
                                                {fake_car[0].transmission}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Carroceria</h1>
                                            <p>
                                                {fake_car[0].bodywork}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Combustível</h1>
                                            <p>
                                                {fake_car[0].fuel}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="car-details-info-2">
                                        <div>
                                            <h1>Final de placa</h1>
                                            <p>
                                                2
                                                {/* {fake_car[0].year} */}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Cor</h1>
                                            <p>
                                                {fake_car[0].color}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Aceita troca ? </h1>
                                            <p>
                                                {fake_car[0].trade ? 'Sim' : 'Não'}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Blindagem ? </h1>
                                            <p>
                                                {fake_car[0].blindage ? fake_car[0].blindage ? 'Sim' : 'Não' : 'Não'}
                                            </p>
                                        </div>
                                        <div>
                                            <h1>Direção</h1>
                                            <p>
                                                {fake_car[0].direction}
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <hr className="car-detail-divider" />
                                <section>
                                    <h1>Descrição</h1>
                                    <p className="car-detail-description">
                                        {fake_car[0].description}
                                    </p>
                                </section>
                                <hr className="car-detail-divider" />
                                <section>
                                    <h1>Itens do veículo</h1>
                                    <div className="optional-grid">
                                        <h3>Airbag</h3>
                                        <h3>Alarme</h3>
                                        <h3>Ar quente</h3>
                                        <h3>Computador de bordo</h3>
                                        <h3>Desembaçador traseiro</h3>
                                        <h3>Freio ABS</h3>
                                        <h3>Limpador traseiro</h3>
                                        <h3>Retrovisores elétricos</h3>
                                    </div>
                                </section>
                            </div>
                            <div className="right-side-car-detail">
                                <section>
                                    <h1 className="car-detail-price">
                                        {fake_car[0].price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </h1>
                                    <p className="car-detail-price-description">
                                        Valor à vista
                                    </p>
                                    <hr className="car-detail-divider-right-side" />
                                    <h2 className="car-detail-vendor">
                                        Envie uma mensagem ao vendedor
                                    </h2>
                                    <a href={`http://wa.me/55999907886?text=Olá, gostaria de saber se o veículo ${fake_car[0].model} na cor ${fake_car[0].color} ainda esta disponível ? `} className="button-whats">
                                        <img src={IMG.whats} alt="" />
                                        <div className="whats">
                                            <p>
                                                Fale conosco pelo
                                            </p>
                                            <h1>
                                                WhatsApp
                                            </h1>
                                        </div>
                                    </a>
                                    <div className="m-3">
                                        <GenericInput label={'Nome'} theme="light" exemple={''} type={'text'} value={name} onChange={(e) => setName(e.prevent.value)} placeholder={'Nome'} />
                                        <GenericInput label={'Email'} theme="light" exemple={''} type={'email'} value={email} onChange={(e) => setEmail(e.prevent.value)} placeholder={'Email'} />
                                        <GenericInput label={'Telefone'} theme="light" exemple={''} type={'email'} value={cellphone} onChange={(e) => setCellphone(e.prevent.value)} placeholder={'Telefone'} />
                                        <GenericInput label={'Mensagem'} theme="light" exemple={''} type={'textarea'} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={'Mensagem'} />
                                    </div>
                                    <button className="button-send-message">
                                        Enviar Mensagem
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="others-cars">
                        <h1>
                            Outros veículos
                        </h1>
                        <Slider {...settings_others_cars}>
                            {carros.map((carro, index) => (
                                <div key={carro.id} className="configure-others-cars" >
                                    <Generic_card disableSlideImgs={true} key={carro.id} id={carro.id} model={carro.model} imgs={carro.imgs} mark={carro.mark} price={carro.price} bodywork={carro.bodywork} traction={carro.traction} year={carro.year} kilometers={carro.kilometers} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ) : (
                <div className="content-mobile">
                    <NavLink to="/estoque" className="back-to-stock">
                        <img src={leftArrow} alt="Voltar" />
                        <p>Voltar para o estoque</p>
                    </NavLink>
                    <div className="container-car-detail">
                        <div className="spacing-imgs">
                            <Slider {...settings_mobile}>
                                {fake_car[0].imgs.map((url, index) => (
                                    <div key={index}>
                                        <img
                                            src={`data:image/jpeg;base64,${url}`}
                                            alt={`Slide ${index + 1}`}
                                            className="car-detail-img"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <section className="car-detail-info-1-mobile">
                            <h1 className="car-title">
                                {fake_car[0].mark} <span className="title-color">{fake_car[0].model}</span>
                            </h1>
                            <h3 className="car-description">
                                {fake_car[0].motor + ' ' + fake_car[0].traction + ' ' + fake_car[0].fuel}
                            </h3>
                            <h3 className="car-detail-price">
                                {fake_car[0].price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </h3>
                            <p className="car-detail-price-description">
                                Valor à vista
                            </p>
                            <hr className="car-detail-divider-right-side" />
                            <h2 className="car-detail-vendor">
                                Envie uma mensagem ao vendedor
                            </h2>
                            <a href={`http://wa.me/55999907886?text=Olá, gostaria de saber se o veículo ${fake_car[0].model} na cor ${fake_car[0].color} ainda esta disponível ? `} className="button-whats">
                                <img src={IMG.whats} alt="" />
                                <div className="whats">
                                    <p>
                                        Fale conosco pelo
                                    </p>
                                    <h1>
                                        WhatsApp
                                    </h1>
                                </div>
                            </a>
                            <div className="m-3">
                                <GenericInput label={'Nome'} theme="light" exemple={''} type={'text'} value={name} onChange={(e) => setName(e.prevent.value)} placeholder={'Nome'} />
                                <GenericInput label={'Email'} theme="light" exemple={''} type={'email'} value={email} onChange={(e) => setEmail(e.prevent.value)} placeholder={'Email'} />
                                <GenericInput label={'Telefone'} theme="light" exemple={''} type={'email'} value={cellphone} onChange={(e) => setCellphone(e.prevent.value)} placeholder={'Telefone'} />
                                <GenericInput label={'Mensagem'} theme="light" exemple={''} type={'textarea'} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={'Mensagem'} />
                            </div>
                            <button className="button-send-message">
                                Enviar Mensagem
                            </button>
                        </section>
                        <hr className="car-detail-divider" />
                        <section>
                            <h1 className="resumed">Resumo</h1>
                            <hr className="car-detail-divider divider-2" />
                            <div className="container-information-mobile">
                                <div class="item-esquerdo">
                                    <h1>Ano</h1>
                                    <p>
                                        {fake_car[0].year}
                                    </p>
                                </div>
                                <div class="item ">
                                    <h1>Kilometros</h1>
                                    <p>
                                        {fake_car[0].kilometers}
                                    </p>
                                </div>
                                <div class="item-esquerdo">
                                    <h1>Câmbio</h1>
                                    <p>
                                        {fake_car[0].transmission}
                                    </p>
                                </div>
                                <div class="item">
                                    <h1>Carroceria</h1>
                                    <p>
                                        {fake_car[0].bodywork}
                                    </p>
                                </div>
                                <div className="item-esquerdo">
                                    <h1>Combustível</h1>
                                    <p>
                                        {fake_car[0].fuel}
                                    </p>

                                </div>
                                <div className="item">
                                    <h1>Final de placa</h1>
                                    <p>
                                        2
                                    </p>
                                </div>
                                <div className="item-esquerdo">
                                    <h1>Cor</h1>
                                    <p>
                                        {fake_car[0].color}
                                    </p>
                                </div>
                                <div className="item">
                                    <h1>Aceita troca ? </h1>
                                    <p>
                                        {fake_car[0].trade ? 'Sim' : 'Não'}
                                    </p>
                                </div>
                                <div className="item-esquerdo">
                                    <h1>Blindagem ? </h1>
                                    <p>
                                        {fake_car[0].blindage ? fake_car[0].blindage ? 'Sim' : 'Não' : 'Não'}
                                    </p>
                                </div>
                                <div className="item">
                                    <h1>Direção</h1>
                                    <p>
                                        {fake_car[0].direction}
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h1>Itens do veículo</h1>
                            <div className="container-information-mobile">
                                <h1 className="optional-item">
                                    Airbag
                                </h1>
                                <h1 className="optional-item">
                                    Alarme
                                </h1>
                                <h1 className="optional-item">
                                    Ar quente
                                </h1>
                                <h1 className="optional-item">
                                    Computador de bordo
                                </h1>
                                <h1 className="optional-item">
                                    Desembaçador traseiro
                                </h1>
                                <h1 className="optional-item">
                                    Freio ABS
                                </h1>
                                <h1 className="optional-item">
                                    Limpador traseiro
                                </h1>
                                <h1 className="optional-item">
                                    Retrovisores elétricos
                                </h1>
                            </div>
                        </section>
                        <hr className="car-detail-divider divider-2" />
                        <section>
                            <div className="others-cars">
                                <h1>
                                    Outros veículos
                                </h1>
                                <Slider {...settings_others_cars}>
                                    {carros.map((carro, index) => (
                                        <div key={carro.id} className="configure-others-cars" >
                                            <Generic_card disableSlideImgs={true} key={carro.id} id={carro.id} model={carro.model} imgs={carro.imgs} mark={carro.mark} price={carro.price} bodywork={carro.bodywork} traction={carro.traction} year={carro.year} kilometers={carro.kilometers} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </section>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}