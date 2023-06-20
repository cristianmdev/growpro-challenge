/**
 * @desc Estilos
 */
import { 
    Root,
        Details,
            Item,
            Total
} from "./Reservation.styles";

/**
 * @desc Hook's
 */
import { useReservation } from "./Reservation.hooks";

/**
 * @desc Model's
 */
import { Product } from "../../../../../../Models/Cart/Cart";

/**
 * @desc Adapter's
 */
import ReservationAdapter from "./Reservation.adapter";

/**
 * @desc Components
 */
import Modal from "../../../../../../Components/Modal/Modal";

/**
 * @desc Interface del componente
 */
interface IReservation {
    data: Product | null;
    onClose: () => void;
    show: boolean;
}

/**
 * @desc Contenido del producto
 */
const Reservation = ( props  : IReservation ) => {

    // Alias de las propiedades
    const { data, onClose, show } = props;

    // Manejador de la confirmación de la reservación 
    // [DEV] >> (Podría ser func acá pero mantendría por las dudas expandirlo el custom hook)
    const { onConfirm } = useReservation({ onClose }); 

    // Break por requisitos
    if( data === null || !show ) return;

    // Adaptador de la reserva
    const adapter = new ReservationAdapter( data );

    return ( 
        <Root>

            { /* Contenido */ }
            <Modal show={ true } title="Confirmación de la reserva" onConfirm={ () => onConfirm( data ) } onCancel={ onClose }>
                <>
                    { /* Detalles de la reservación */ }
                    <Details>

                        { /* Cantidad de días */ }
                        <Item>
                            Cantidad de días <b>{ adapter.getDays() }</b>
                        </Item>

                        { /* Valor base de la reserva */ }
                        <Item>
                            Valor base de la reserva <b>{ adapter.getPriceBase() }</b>
                        </Item>

                    </Details>

                    <Total>
                        Total del valor <b>{ adapter.getTotal() }</b>
                    </Total>
                </>
            </Modal>

        </Root>
    );

}

export default Reservation;