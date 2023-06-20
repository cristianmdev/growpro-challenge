/**
 * @desc Dependencias
 */
import React from "react";
import Slider from "react-slick";

/**
 * @desc Custom Hooks
 */
import { Bicycle } from "../../Models/Bicycle/Bicycle";

/**
 * @desc Estilos
 */
import { 
    Root
} from "./Carrousel.styles";

/**
 * @desc Componentes
 */
import ProductCard from "../../Components/ProductCard/ProductCard";

/**
 * @desc Interfaz de las propiedades
 */
interface IProps {
    data: Bicycle[];
    options: object;
}

/**
 * @desc Pantalla de productos
 */
const Carrousel = React.memo(( props : IProps ) => {

    // Alias de las propiedades
    const { data, options } = props;

    // Configuración
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    /**
     * @desc Listado de productos
     */
    const productsMapper = ( item: Bicycle, key: number ) => (
        <ProductCard key={ key } data={ item } options={ options } />
    );

    return (
        <Root>
            <Slider {...settings}>

                { /** Listado de los productos */ } 
                { data?.map( productsMapper ) }
                
            </Slider>
        </Root>
    );

});

export default Carrousel;

