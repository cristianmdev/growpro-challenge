/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:grid;
    background:rgba(0,0,0, 0.75);
    width:100%;
    height:100%;
    place-items:center;
    position:fixed;
    z-index:3;
`;

        /**
         * @desc Titulo
         */
        export const Title = styled.h3`
            padding:10px;
            margin:0px;
            margin-bottom:10px;
            border-bottom:1px solid #ccc;
            text-align:center;
        `;

        /**
         * @desc Contenido
         */
        export const Content = styled.div`
            padding:10px;
            min-height:150px;
        `;

        /**
         * @desc Item del detalle
         */
        export const Item = styled.p`
            display:flex;
            color:#333;
            margin:5px 0px;
            justify-content:space-between;
        `;

        /**
         * @desc Monto total del producto
         */
        export const Details = styled.div`
            display:flex;
            justify-content:space-between;
            flex-direction:column;
            border-bottom:1px solid #ddd;
            padding-bottom:20px;
        `;

        /**
         * @desc Monto total del producto
         */
        export const Total = styled.div`
            display:flex;
            justify-content:space-between;
            padding:20px 0px;
        `;
