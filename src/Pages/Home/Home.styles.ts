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
    height:100vh;
    overflow: hidden;
    overflow-y: auto;
    flex-direction:column;
    margin-bottom:20px;    
    @media (max-width: 390px){
        padding-top:60px;
        height:calc( 100svh - 60px );
    }
`;