/**
 * @desc Dependencias
 */
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
    Section,
    Title, SubTitle
} from "./ProductList.styles";

/**
 * @desc Componentes
 */
import Carrousel from "../../../../Components/Carrousel";

/**
 * @desc Adaptador
 */
import ProductListAdapter from "./ProductList.adapter";

/**
 * @desc Modelos
 */
import { Bicycle, SubCategoryTypes } from "../../../../Models/Bicycle/Bicycle";

/**
 * @desc Pantalla de productos
 */
const Products = () => {

    // Alias de las propiedades
    const { loading, data } = useProductList();

    // Traducciones
    const { t } = useTranslation();

    // Modo de carga
    if( loading ) return;
    
    // Adaptador de la lista
    const listAdapter = new ProductListAdapter( data );

    // Opciones
    const options = {
        "location": ( item : Bicycle ) => "/bicycle/product/" + item.id
    };

    return (
        <Root>

            { /* Titulo */ } 
            <Title>¡ Alquilamos todo tipo de bicicletas !</Title>

            { /* Listado de los productos */ } 
            <Section>

                { /* Titulo */ } 
                <SubTitle>{ t("bicycles") } { t( "electrics" ) } </SubTitle>
                <Carrousel data={ listAdapter.getBySubCategory( SubCategoryTypes.electrics ) } options={ options } />

            </Section>

            { /* Listado de los productos */ } 
            <Section>
                
                { /* Titulo */ } 
                <SubTitle>{ t("bicycles") } { t( "moderns" ) }</SubTitle>
                <Carrousel data={ listAdapter.getBySubCategory( SubCategoryTypes.moderns ) } options={ options } />

            </Section>

            { /* Listado de los productos */ } 
            <Section>

                { /* Titulo */ } 
                <SubTitle>{ t("bicycles") } { t( "old" ) } </SubTitle>
                <Carrousel data={ listAdapter.getBySubCategory( SubCategoryTypes.old ) } options={ options } />

            </Section>
            
        </Root>
    );

};

export default Products;