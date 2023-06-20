/**
 * @desc Dependencias
 */
import { SyntheticEvent } from "react";
import { useAtom } from "jotai";

/**
 * @desc Atom's
 */
import {
    atomFirstName,
    atomEmail,
    atomAreaPhone,
    atomPhone,
    atomDateFrom,
    atomQuantity
} from "./Form.atoms"

/**
 * @desc Model's
 */
import { IField, IFieldDate } from "../../../../../../Models/Jotai-Form/Field";

/**
 * @desc Hook: Manejador del campo de nombre
 */
export const useFirstName = () => {

    // Datos
    const [ firstName, setFirstName ] = useAtom( atomFirstName );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetEmail = ( evt : SyntheticEvent ) : void => {

        // Cantidad
        const target = evt.target as HTMLInputElement;
        // Nuevo
        setFirstName( target.value );

    };

    return {
        "firstName": firstName as IField, 
        "setFirstName": handleSetEmail
    };

};

/**
 * @desc Hook: Manejador del campo de email
 */
export const useEmail = () => {

    // Datos
    const [ email, setEmail ] = useAtom( atomEmail );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetEmail = ( evt : SyntheticEvent ) : void => {

        // Cantidad
        const target = evt.target as HTMLInputElement;
        // Nuevo
        setEmail( target.value );

    };

    return {
        "email": email as IField, 
        "setEmail": handleSetEmail
    };

};

/**
 * @desc Hook: Manejador del campo del codigo de area
 */
export const useAreaPhone = () => {

    // Datos
    const [ areaPhone, setAreaPhone ] = useAtom( atomAreaPhone );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetAreaPhone = ( evt : SyntheticEvent ) : void => {

        // Cantidad
        const target = evt.target as HTMLInputElement;
        // Nuevo
        setAreaPhone( target.value );

    };

    return {
        "areaPhone": areaPhone as IField, 
        "setAreaPhone": handleSetAreaPhone
    };

};

/**
 * @desc Hook: Manejador del campo de telefono
 */
export const usePhone = () => {

    // Datos
    const [ phone, setPhone ] = useAtom( atomPhone );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetPhone = ( evt : SyntheticEvent ) : void => {

        // Cantidad
        const target = evt.target as HTMLInputElement;
        // Nuevo
        setPhone( target.value );

    };

    return {
        "phone": phone as IField, 
        "setPhone": handleSetPhone
    };

};

/**
 * @desc Hook: Manejador del campo de "fecha desde"
 */
export const useDateFrom = () => {

    // Datos
    const [ dateFrom, setDateFrom ] = useAtom( atomDateFrom );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetDateFrom = ( date : any ) : void => {

        // Nuevo
        setDateFrom( date.format("YYYY-MM-DD") );

    };

    return {
        "dateFrom": dateFrom as IFieldDate, 
        "setDateFrom": handleSetDateFrom
    };

};

/**
 * @desc Hook: Manejador del campo de cantidad
 */
export const useQuantity = ( ) => {

    // Datos
    const [ quantity, setQuantity ] = useAtom( atomQuantity );

    /**
     * @desc Manejador de los cambios de la cantidad
     */
    const handleSetQuantity = ( evt : SyntheticEvent ) => {

        // Cantidad
        const target = evt.target as HTMLInputElement;
        
        // Nuevo valor
        const newValue : number = parseInt(target.value);

        // Nuevo
        setQuantity( newValue < 1 ? 0 : newValue );

    };

    return {
        "quantity": quantity as IField, 
        "setQuantity": handleSetQuantity
    };

};