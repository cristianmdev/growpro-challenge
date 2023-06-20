/**
 * @desc Librerias
 */
import { styled } from "styled-components";
import { 
    Breadcrumbs as BreadcrumbsMui, 
    Typography as TypographyMui,
    Link as LinkMui
} from "@mui/material";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:block;
    background:#fff;
    width:50%;
    height:100svh;
    z-index:2;
    padding:120px 40px;
    box-sizing: border-box;
    
    @media ( width <= 768px ){
        width:100%;
        height:auto;
        padding:40px 20px;
        padding-top:120px;
    }
    @media ( width <= 390px ){
        padding-top:100px;
    }
`;

/**
 * @desc Camino de migajas
 */
export const Breadcrumbs = styled( BreadcrumbsMui )`
    &&{
        display:flex;
        max-width:760px;
        margin:0 auto;
        padding:0px;
        flex-direction:column;
        box-sizing:border-box;
    }
`;

    /**
     * @desc Tipografia
     */
    export const Typography = styled( TypographyMui )`
    `;

    /**
     * @desc Link
     */
    export const Link = styled( LinkMui )`
        text-transform:capitalize;
    `;


/**
 * @desc Contenido del detalle
 */
export const Content = styled.div`
    display:flex;
    max-width:800px;
    margin:0 auto;
    padding:20px 0px;
    flex-direction:column;
    box-sizing:border-box;
`;

/**
 * @desc Titulo
 */
export const Title = styled.h1`
    display:flex;
    width:100%;
    color:#333;
    margin:0px;
    padding:10px 20px;
    justify-content:space-between;
    align-items:center;    
    
    @media ( width <= 768px ){
        flex-direction:column;
        align-items:flex-start;
    }

`;

    /**
     * @desc Covertura de la imagen
     */
    export const Figure = styled.div`
        display:flex;
        height:350px;
        justify-content:center;
        align-items:center;
        margin:0 auto;
        border-radius:5px;
    `;

    /**
     * @desc Imagen del detalle del producto
     */
    export const Image = styled.img`
        max-width: 100%;
        max-height:220px;
    `;
    
    /**
     * @desc Descripción
     */
    export const Description = styled.p`
        display:block;
        width:100%;
        color:#444;
        margin:0px;
        font-size:16px;
        padding:10px 20px;
        box-sizing:border-box;
    `;

    /**
     * @desc Fecha de creación
     */
    export const Created = styled.time`
        background:#48ba86;
        color:#fffc;
        font-size:14px;
        font-weight:400;
        padding:5px 15px;
        border-radius:15px;
        @media ( width <= 768px ){
            margin:10px 0px;
        }

    `;


    /**
     * @desc SubCategoria de bicicleta
     */
    export const SubCategory = styled.div`
        margin:10px 20px;
        text-transform:capitalize;
    `;



    