/**
 * @desc Dependencias
 */
import React from "react";

/**
 * @desc Estilos
 */
import { 
    Root,
        Layout,
            Title, Content, Actions,
                Button
} from "./Modal.styles";


/**
 * @desc Interface del componente
 */
interface IModalProps {
    onCancel?: () => void;
    onConfirm: () => void;
    show: boolean;
    title: string;
    children: React.ReactElement
}

/**
 * @desc Contenido del producto
 */
const Modal = ( props  : IModalProps ) => {

    // Alias de las propiedades
    const { onCancel, onConfirm, show, title, children } = props;

    if( !show ) return;

    return ( 
        <Root>

            { /* Contenido */ }
            <Layout>

                { /* Titulo */ }
                <Title>{ title }</Title>

                { /* Mensaje */ }
                <Content>
                    { children }
                </Content>

                { /* Acciones */ }
                <Actions>
                    {
                        typeof onCancel === "function" &&
                        <Button variant="outlined" color="secondary" className="cancel" onClick={ onCancel }>Cancelar</Button>
                    }
                    <Button variant="outlined" onClick={ onConfirm }>Confirmar</Button>
                </Actions>

            </Layout>

        </Root>
    );

}

export default Modal;