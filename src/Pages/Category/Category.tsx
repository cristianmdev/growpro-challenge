/**
 * @desc Components globals
 */
import Header from "../../Components/Header/Header";

/**
 * @desc Components page
 */
import Slide from "./Components/Slide";
import ProductList from "./Components/ProductList";

/**
 * @desc Estilos
 */
import { 
    Root
} from "./Category.styles";


/**
 * @desc Pantalla de productos
 */
const Products = () => {

    return (
        <Root>

            { /* Cabecera */ }
            <Header />
            
            { /* Slide */ }
            <Slide />

            { /** Listado de los productos */ } 
            <ProductList />

        </Root>
    );

};

export default Products;