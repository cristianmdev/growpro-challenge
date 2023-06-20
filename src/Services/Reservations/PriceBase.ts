/**
 * @desc Model's
 */
import Dayjs, { Dayjs as DayjsT } from "dayjs";

/**
 * @desc Precio base
 */
class PriceBase {

    /**
     * @desc Día de reserva
     */
    private DayBooking : DayjsT | null = null;

    /**
     * @desc Valor base
     */
    private Base = 10;

    /**
     * @desc Recargo por 2da quincena
     */
    private Recharge = 12;

    /**
     * @desc Precio
     */
    private Price : number = this.Base;

    /**
     * @desc Symbol money 
     */
    Symbol = "USD"; 

    /**
     * @desc Constructor del precio base
     */
    constructor( dateFrom : string ){

        // Asignamos la fecha de inicio
        this.setDateFrom( dateFrom );

        return this;
    }

    /**
     * @desc Asigna la fecha de inicio
     */
    private setDateFrom( dateFrom : string ){

        // Instancia de dayJs del día de la reserva
        this.DayBooking = Dayjs( dateFrom );
                
        // Mes & año de la reserva
        const startRangeDay = this.DayBooking.format("YYYY-MM")

        // Validamos la fecha en la que comienza la reserva
        const withRecharge = this.DayBooking.isAfter( `${startRangeDay}-15` );

        // Aplicamos el precio base
        if( withRecharge )
            this.Price = this.Recharge;

    }

    /**
     * @desc Obtiene el precio base
     */
    getPriceBase(){
        return this.Price;
    }
    
}

export default PriceBase;