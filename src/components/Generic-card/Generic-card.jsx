import './Generic-card.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router';

export default function Generic_card({
    id = 0,
    imgs = [],
    model = '',
    bodywork = '',
    price = 0.0,
    mark = '',
    traction = '',
    year = '',
    kilometers = 0,
    isStock = false,
    disableSlideImgs = false
}) {
    const ViewportHeight = window.innerHeight;
    const firstImage = imgs[0];
    const cardWidth = isStock ? '35vh' : '40vh';
    const cardHeight = () => {
        if (isStock) {
            return ViewportHeight <= 678 ? '53vh' : '45vh';
        }
        return ViewportHeight <= 678 ? '53vh' : '50vh';
    };
    const settings = {
        infinite: imgs.length >= 2 ? true : false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <NavLink to={`/carros/${id}`} className="card" style={{ width: cardWidth, height: cardHeight() }}>
            {!disableSlideImgs ? (
                <Slider {...settings}>
                    {imgs.map((url, index) => (
                        <div key={index}>
                            <img
                                src={`data:image/jpeg;base64,${url}`}
                                alt={`Slide ${index + 1}`}
                                className="card-img"
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <img
                    src={`data:image/jpeg;base64,${firstImage}`}
                    alt="First Slide"
                    className="card-img"
                />
            )}

            <h1 className="card-car-title">
                {model}
            </h1>
            <h6 className="card-car-bodywork">
                {bodywork}
            </h6>
            <h6 className="card-car-price">
                Preço: R$ {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </h6>
            <h6 className="card-car-mark">
                Marca: {mark}
            </h6>
            <h6 className="card-car-traction">
                Tração: {traction}
            </h6>
            <h6 className="card-car-year">
                Ano: {year}
            </h6>
            <h6 className="card-car-kilometers">
                Quilometragem: {kilometers} km
            </h6>
        </NavLink>
    )
}