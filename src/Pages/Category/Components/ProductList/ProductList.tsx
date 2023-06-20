/**
 * @desc Depenendencias
 */
import { useRoute } from "wouter";
import { useTranslation } from "react-i18next";

/**
 * @desc Custom Hooks
 */
import { useProductList } from "./Products.hooks";

/**
 * @desc Estilos
 */
import { 
    Root,
    Content,
    Title
} from "./ProductList.styles";

/**
 * @desc Adaptador
 */
import ProductListAdapter, { IOptionsAdapter } from "./ProductList.adapter";

/**
 * @desc Componentes
 */
import ProductCard from "../../../../Components/ProductCard";

/**
 * @desc Model's
 */
import { Bicycle } from "../../../../Models/Bicycle/Bicycle";

/**
 * @desc Pantalla de productos
 */
const Products = () => {

    // Alias de las propiedades
    const { loading, data } = useProductList();
    // Ruta
    const [ , params ] = useRoute("/bicycle/sub-category/:subCategory");
    
    // Traducciones
    const { t } = useTranslation();

    // Modo de carga
    if( loading ) return;
    
    // Adaptador de la lista
    const listAdapter = new ProductListAdapter( data, params as IOptionsAdapter );

    // Opciones
    const options = {
        location: ( item: Bicycle ) => "/bicycle/product/" + item.id
    };

    /**
     * @desc Listado de productos
     */
    const productsMapper = ( item: Bicycle, key: number ) => (
        <ProductCard key={ key } data={ item } options={ options } />
    );

    return (
        <Root>

            { /* Titulo */ } 
            <Title>{ t( "bicycles" ) } { t( listAdapter.Options.subCategory ?? "" ) }</Title>

            { /* Contenido */}
            <Content>

                { /** Listado de los productos */ } 
                { listAdapter.getBySubCategory( listAdapter.Options.subCategory )?.map( productsMapper )  }

            </Content>

        </Root>
    );

};

export default Products;