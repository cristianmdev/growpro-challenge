/**
 * @desc Dependencias
 */
import { useAtom } from "jotai";

/**
 * @desc Model's
 */
import { Product } from "../../../../../../Models/Cart/Cart";

/**
 * @desc Atom's
 */
import { atomCongrats } from "../../Content.atoms";

/**
 * @desc Interface de las propiedades
 */
interface IProps {
    onClose: () => void;
}

/**
 * @desc Interface del hook
 */
interface IUserReservation {
    onConfirm: ( product : Product ) => Promise<void>;
}

/**
 * @desc Hook: Manejador de la reservación
 */
export const useReservation = ( props : IProps ) : IUserReservation  => {

    // Estado de las felicitaciones
    const [ , setShowCongrats ] = useAtom( atomCongrats ); 

    /**
     * @desc Manejador del envio de la reservación
     */
    const onConfirm = async ( payload : Product ) : Promise<void> => {

        // Alias de las propiedades
        const { onClose } = props;

        // Actualizamos la reservación
        localStorage.setItem( "reservation", JSON.stringify( payload ) );

        // Cerramos el modal de reserva
        onClose();

        // Mostramos el modal de felicitaciones
        setShowCongrats( true );

    };

    return {
        onConfirm
    }

};