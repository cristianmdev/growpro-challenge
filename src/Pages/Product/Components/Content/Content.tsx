/**
 * @desc Estilos
 */
import { Root } from "./Content.styles";

/**
 * @desc SubComponent's
 */
import Details from "./SubComponents/Details/Details";
import Form from "./SubComponents/Form/Form";

/**
 * @desc Hook
 */
import { useProduct, useReservation } from "./Content.hooks";

/**
 * @desc Component's
 */
import Reservation from "./SubComponents/Reservation"
import ModalCongrats from "./SubComponents/Congrats";

/**
 * @desc Model's
 */
import { IForm } from "../../../../Models/Jotai-Form";

/**
 * @desc Contenido del producto
 */
const Content = () => {

    // Obtiene el producto
    const { data } = useProduct();
    // Manejador de la reservación
    const { showReservation, onOpen, onClose, product } = useReservation();

    if( !data ) return;

    return ( 
        <Root>

            { /* Detalles del item */ }
            <Details data={ data } />

            { /* Formulario */ }
            <Form onSubmit={ ( payload : IForm ) => onOpen( payload ) } />
            
            { /* Modal de reservación */ }
            <Reservation show={ showReservation } onClose={ onClose } data={ product } />

            { /* Modal de felicitciones */}
            <ModalCongrats />

        </Root>
    )

}


export default Content;