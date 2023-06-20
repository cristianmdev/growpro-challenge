/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    box-sizing:border-box;

    @media ( width <= 768px ){
        flex-direction:column;
    }
`;