/**
 * @desc Dependencias
 */
import React from "react";

/**
 * @desc Models
 */
import { Bicycle } from "../../Models/Bicycle/Bicycle";

/**
 * @desc Estilos
 */
import { 
    Root,
    Horizontal,
    Figure, Image, Title, Description
} from "./ProductCard.styles";

/**
 * @desc Opciones
 */
interface IOptions{
    location?: ( item : Bicycle ) => string;
}

/**
 * @desc Tarjeta del producto
 */
interface IProductCard{
    data: Bicycle;
    options: IOptions;
}

/**
 * @desc Componente de la tarjeta de un producto
 */
const ProductCard = React.memo( ( props : IProductCard ) => {

    // Alias de las propiedades
    const { data, options } = props;
    // Alias de los datos
    const { image, name, description } = data;
    // Alias de las opciones
    const location = options.location as IOptions['location'];

    return (
        <Root href={ typeof location === "function" ? location( data ) : "#" }>

            { /* Imagen */ }
            <Figure>
                <Image src={ image } />
            </Figure>

            { /* Linea horizontal */}
            <Horizontal />
            
            { /* Nombre */ }
            <Title>{ name }</Title>

            { /* Imagen */ }
            <Description>{ description?.substring( 0 , 100 ) }</Description>

        </Root>
    );

});

export default ProductCard;