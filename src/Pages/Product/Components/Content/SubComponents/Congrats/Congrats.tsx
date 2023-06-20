/**
 * @desc Dependencias
 */
import { useAtom } from "jotai";

/**
 * @desc Estilos
 */
import { 
    Message
} from "./Congrats.styles";

/**
 * @desc Components
 */
import Modal from "../../../../../../Components/Modal/Modal";

/**
 * @desc Atom's
 */
import { atomCongrats } from "../../Content.atoms";

/**
 * @desc Contenido del producto
 */
const Congrats = ( ) => {

    // Atomo de felicitaciones
    const [ showCongrats, setShowCongrats ] = useAtom( atomCongrats );

    return ( 
        <Modal show={ showCongrats } title="Reserva confirmada !" onConfirm={ () => setShowCongrats( false ) }>
            { /* Detalles de la reservación */ }
            <Message>
                Felicidades su reserva fue registrada con exito<br />
                Recibiras las novedades del mismo dentro de tu casilla de email! 
            </Message>
        </Modal>
    );

}

export default Congrats;