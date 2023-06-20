/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:flex;
    background:#f2f2f2;
    width:100%;
    height:100svh;
    flex-direction:column;
    margin:0px;
    margin-bottom:20px;
    box-sizing:border-box;
    overflow-y:auto;
    overflow-x:hidden;

    @media (max-width: 390px){
        padding-top:60px;
    }
`;