/**
 * @desc Librerias
 */
import { styled } from "styled-components";
import { Button as ButtonMui } from "@mui/material"

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:grid;
    background:rgba(0,0,0, 0.3);
    width:100%;
    height:100%;
    place-items:center;
    position:fixed;
    z-index:3;
`;

    /**
     * @desc Layout central de la reservación
     */
    export const Layout = styled.div`
        display:flex;
        background:white;
        width:90%;
        max-width:500px;
        border-radius:5px;
        flex-direction:column;
        overflow:hidden;
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
            min-height:70px;
        `;

        /**
         * @desc Acciones
         */
        export const Actions = styled.div`
            display:flex;
            background:#111;
            justify-content:space-around;
            padding:10px;
        `;

        /**
         * @desc Botones
         */
        export const Button = styled( ButtonMui )`
            &&{        
                display:block;
                width:200px;
                border-radius:25px;
        
                &.Mui-disabled{
                    color:#48ba86;
                    border:1px solid #48ba86;
                    opacity:0.5;
                    cursor:normal;
                }
            }

            &.cancel{
                border:0px;
            }
        `;


        /**
         * @desc Monto total del producto
         */
        export const Total = styled.div`
            display:flex;
            justify-content:space-between;
            padding:20px 0px;
        `;
