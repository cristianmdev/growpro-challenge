/**
 * @desc Dependencias
 */
import Slider from "react-slick";

/**
 * @desc Estilos
 */
import { 
    Root, Image
} from "./Slide.styles";

/**
 * @desc Pantalla de productos
 */
const Slide = () => {

    // Configuración
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Root>
            <Slider {...settings}>

                <Image src="/images/slide/1.webp" />
                <Image src="/images/slide/2.webp" />
                <Image src="/images/slide/3.webp" />
                <Image src="/images/slide/4.webp" />

            </Slider>
        </Root>
    );

};

export default Slide;