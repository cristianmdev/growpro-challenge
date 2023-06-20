/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    background:#ddd;
    width:calc( 100% - 20px );
    border-radius:3px;
    padding:20px 35px;
    margin:0 auto;
    box-sizing:border-box;

    & .slick-prev:after, 
    & .slick-next:after,
    & .slick-prev:before, 
    & .slick-next:before{
        color:#777;
    }
`;