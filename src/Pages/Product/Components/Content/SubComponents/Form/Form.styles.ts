/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Material-UI
 */
import { 
    TextField as TextFieldMui,
    Button as ButtonMui
} from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:block;
    width:100%;
    max-width:500px;
    z-index:2;
    margin:120px auto; 
    border-radius:5px;
    padding-bottom:30px;
    
    @media( max-width: 768px ) {
        margin:20px auto;
    }
    @media( max-width: 390px ) {
        margin:0px auto;
    }
`;

/**
 * @desc Contenido
 */
export const Content = styled.div`
    display:block;
    background:#ddd;
    max-width:1600px;
    z-index:2;
    margin:10px auto; 
    padding:10px 20px;
    padding-bottom:30px;
`;

/**
 * @desc Raiz de los componentes
 */
export const Section = styled.div`
    display:flex;
`

/**
 * @desc Raiz de los componentes
 */
export const FieldSet = styled.div`
    display:flex;
    width:100%;
    margin:0 auto;
    padding:20px 0px;
    padding-bottom:0px;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    
    &.row{
        flex-direction:row;        
    }
`;

/**
 * @desc Etiqueta
 */
export const Label = styled.label`
    display:flex;
    color:#333;
    width:100%;
    margin-bottom:5px;
    position:relative;
`;

/**
 * @desc Campo de texto
 */
export const TextField = styled( TextFieldMui )`
    width:98%;
`


/**
 * @desc Mensaje de error
 */
export const Error = styled.p`
    color:red;
    font-weight:500;
    font-size:12px;
`

/**
 * @desc Calendario de rangos
 */
export const Calendar = styled( DatePicker )`
    width:98%;
`


/**
 * @desc Calendario de rangos
 */
export const Actions = styled.div`
    display:flex;
    background:#151515;
    padding:0px;
    justify-content:center;
    align-items:center;
`


/**
 * @desc Calendario de rangos
 */
export const Button = styled( ButtonMui )`
    &&{        
        display:block;
        width:200px;
        margin:20px auto;
        border-radius:25px;

        &.Mui-disabled{
            color:#48ba86;
            border:1px solid #48ba86;
            opacity:0.5;
            cursor:normal;
        }
    }
`
