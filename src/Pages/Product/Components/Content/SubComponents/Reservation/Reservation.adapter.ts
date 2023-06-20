
/**
 * @desc Model's
 */
import { Product } from "../../../../../../Models/Cart/Cart";

/**
 * @desc Service's
 */
import PriceBase from "../../../../../../Services/Reservations/PriceBase";

/**
 * @desc Utilidades
 */
import ConvertToCurrency from "../../../../../../Utils/Currency";

/**
 * @desc Adaptador para la reservacion
 */
class Reservation { 

    /**
     * @desc Datos del producto a reservar
     */
    private Data : Product; 
    
    /**
     * @desc Constructor del adaptador
     */
    constructor( data : Product ){

        // Asignamos los datos 
        this.Data = data;

        return this;

    }

    /**
     * @desc Obtiene el valor base de la reserva
     */
    getPriceBase() : string{

        // Días
        const { dateFrom } = this.Data;

        // Valor base
        const price = new PriceBase( dateFrom ).getPriceBase();

        return ConvertToCurrency().format(price);

    }

    /**
     * @desc Metodo de obtención de días de la reserva
     */
    getDays() : number{

        // Días
        const { quantity } = this.Data;

        return quantity;

    }

    /**
     * @desc Metodo de calculo de la reserva
     */
    getTotal() : string{

        // Días
        const { quantity, dateFrom } = this.Data;

        // Valor base
        const price = this.calculate( new PriceBase( dateFrom ), quantity );

        return ConvertToCurrency().format(price);

    }
    

    /**
     * @desc Calculador de los valores de la reserva
     * 
     * @param { Number } quantity - Cantidad de días a reservar
     */
    private calculate( price : PriceBase, quantity : number ) : number {

        return ( price.getPriceBase() * quantity );

    }

}

export default Reservation;