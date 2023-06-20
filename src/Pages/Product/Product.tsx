/**
 * @desc Components globals
 */
import Header from "../../Components/Header/Header";

/**
 * @desc Components page
 */
import Content from "./Components/Content";

/**
 * @desc Estilos
 */
import { 
    Root
} from "./Product.styles";

/**
 * @desc Pantalla de productos
 */
const Product = () => {

    return (
        <Root>

            { /* Cabecera */ }
            <Header />
            
            { /* Contenido */}
            <Content />

        </Root>
    );

};

export default Product;